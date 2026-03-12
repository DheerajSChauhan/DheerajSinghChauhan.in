import { useEffect, useRef, useCallback } from "react";

const vertex = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragment = `#version 300 es
precision highp float;

uniform vec2 iResolution;
uniform float iTime;

uniform float uTimeSpeed;
uniform float uColorBalance;
uniform float uWarpStrength;
uniform float uWarpFrequency;
uniform float uWarpSpeed;
uniform float uWarpAmplitude;
uniform float uBlendAngle;
uniform float uBlendSoftness;
uniform int uBlendMode;
uniform float uRotationAmount;
uniform float uNoiseScale;
uniform float uGrainAmount;
uniform float uGrainScale;
uniform float uGrainAnimated;
uniform float uContrast;
uniform float uGamma;
uniform float uSaturation;
uniform vec2 uCenterOffset;
uniform float uZoom;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;

out vec4 fragColor;

#define S(a,b,t) smoothstep(a,b,t)

mat2 Rot(float a){
    float s=sin(a),c=cos(a);
    return mat2(c,-s,s,c);
}

vec2 hash(vec2 p){
    p=vec2(dot(p,vec2(2127.1,81.17)),dot(p,vec2(1269.5,283.37)));
    return fract(sin(p)*43758.5453);
}

float noise(vec2 p){
    vec2 i=floor(p),f=fract(p),u=f*f*(3.0-2.0*f);
    float n=mix(
        mix(
            dot(-1.0+2.0*hash(i+vec2(0.0,0.0)),f-vec2(0.0,0.0)),
            dot(-1.0+2.0*hash(i+vec2(1.0,0.0)),f-vec2(1.0,0.0)),
            u.x
        ),
        mix(
            dot(-1.0+2.0*hash(i+vec2(0.0,1.0)),f-vec2(0.0,1.0)),
            dot(-1.0+2.0*hash(i+vec2(1.0,1.0)),f-vec2(1.0,1.0)),
            u.x
        ),
        u.y
    );
    return 0.5+0.5*n;
}

vec3 blendMode(vec3 base, vec3 blend, int mode){
  if(mode==1) return base * blend;
  if(mode==2) return 1.0 - (1.0-base)*(1.0-blend);
  if(mode==3){
    vec3 lt = 2.0*base*blend;
    vec3 gt = 1.0 - 2.0*(1.0-base)*(1.0-blend);
    return mix(lt, gt, step(0.5, base));
  }
  return blend;
}

void mainImage(out vec4 o, vec2 C){
  float t = iTime * uTimeSpeed;
  vec2 uv = C / iResolution.xy;
  float ratio = iResolution.x / iResolution.y;

  vec2 tuv = uv - 0.5 + uCenterOffset;
  tuv /= max(uZoom, 0.001);

  float degree = noise(vec2(t * 0.1, tuv.x * tuv.y) * uNoiseScale);
  tuv.y *= 1.0 / ratio;
  tuv *= Rot(radians((degree - 0.5) * uRotationAmount + 180.0));
  tuv.y *= ratio;

  float frequency = uWarpFrequency;
  float ws = max(uWarpStrength, 0.001);
  float amplitude = uWarpAmplitude / ws;
  float warpTime = t * uWarpSpeed;
  tuv.x += sin(tuv.y * frequency + warpTime) / max(amplitude, 0.001);
  tuv.y += sin(tuv.x * (frequency * 1.5) + warpTime) / max(amplitude * 0.5, 0.001);

  vec3 col1 = uColor1;
  vec3 col2 = uColor2;
  vec3 col3 = uColor3;
  float bal = uColorBalance;
  float soft = max(uBlendSoftness, 0.0);

  mat2 blendRot = Rot(radians(uBlendAngle));
  float blendCoord = (tuv * blendRot).x;

  float edge0 = -0.3 - bal - soft;
  float edge1 = 0.2 - bal + soft;
  float v0 = 0.5 - bal + soft;
  float v1 = -0.3 - bal - soft;

  vec3 layer1 = mix(col3, col2, S(edge0, edge1, blendCoord));
  vec3 layer2 = mix(col2, col1, S(edge0, edge1, blendCoord));

  float blendWeight = S(v0, v1, tuv.y);
  vec3 finalCol = blendMode(layer1, layer2, uBlendMode);
  finalCol = mix(layer1, finalCol, blendWeight);

  vec2 grainUv = uv * max(uGrainScale, 0.001);
  if(uGrainAnimated > 0.5) {
      grainUv += vec2(iTime * 0.05);
  }
  float grainNoise = fract(sin(dot(grainUv, vec2(12.9898, 78.233))) * 43758.5453);
  finalCol += (grainNoise - 0.5) * uGrainAmount;

  finalCol = (finalCol - 0.5) * uContrast + 0.5;

  float luma = dot(finalCol, vec3(0.2126, 0.7152, 0.0722));
  finalCol = mix(vec3(luma), finalCol, uSaturation);

  finalCol = pow(max(finalCol, 0.0), vec3(1.0 / max(uGamma, 0.001)));

  finalCol = clamp(finalCol, 0.0, 1.0);
  o = vec4(finalCol, 1.0);
}

void main(){
  vec4 o = vec4(0.0);
  mainImage(o, gl_FragCoord.xy);
  fragColor = o;
}
`;

function colorToRgb(color: string): [number, number, number] {
  if (!color) return [1, 1, 1];
  if (color.startsWith("#")) {
    const hex = color.replace("#", "").trim();
    if (hex.length >= 6) {
      return [
        parseInt(hex.slice(0, 2), 16) / 255,
        parseInt(hex.slice(2, 4), 16) / 255,
        parseInt(hex.slice(4, 6), 16) / 255,
      ];
    }
  }
  return [1, 1, 1];
}

interface GradientBackgroundProps {
  color1?: string;
  color2?: string;
  color3?: string;
  timeSpeed?: number;
  colorBalance?: number;
  warpStrength?: number;
  warpFrequency?: number;
  warpSpeed?: number;
  warpAmplitude?: number;
  blendAngle?: number;
  blendSoftness?: number;
  blendMode?: number;
  rotationAmount?: number;
  noiseScale?: number;
  grainAmount?: number;
  grainScale?: number;
  grainAnimated?: boolean;
  contrast?: number;
  gamma?: number;
  saturation?: number;
  centerOffsetX?: number;
  centerOffsetY?: number;
  zoom?: number;
  className?: string;
}

const GradientBackground = ({
  color1 = "#4b0082",
  color2 = "#1a1a2e",
  color3 = "#0d0d1a",
  timeSpeed = 0.3,
  colorBalance = 0,
  warpStrength = 1,
  warpFrequency = 5,
  warpSpeed = 0.3,
  warpAmplitude = 5,
  blendAngle = 0,
  blendSoftness = 0.5,
  blendMode: blendModeVal = 0,
  rotationAmount = 360,
  noiseScale = 1,
  grainAmount = 0.03,
  grainScale = 1,
  grainAnimated = true,
  contrast = 1,
  gamma = 1,
  saturation = 1.2,
  centerOffsetX = 0,
  centerOffsetY = 0,
  zoom = 1,
  className = "",
}: GradientBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);
  const glRef = useRef<WebGL2RenderingContext | null>(null);
  const programRef = useRef<WebGLProgram | null>(null);

  const compileShader = useCallback(
    (gl: WebGL2RenderingContext, type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    },
    []
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl2", {
      alpha: true,
      premultipliedAlpha: false,
      antialias: false,
    });
    if (!gl) return;
    glRef.current = gl;

    const vs = compileShader(gl, gl.VERTEX_SHADER, vertex);
    const fs = compileShader(gl, gl.FRAGMENT_SHADER, fragment);
    if (!vs || !fs) return;

    const program = gl.createProgram()!;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      return;
    }
    programRef.current = program;
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );
    const posLoc = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    startTimeRef.current = performance.now() / 1000;

    return () => {
      cancelAnimationFrame(animRef.current);
      gl.deleteProgram(program);
    };
  }, [compileShader]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = glRef.current;
    const program = programRef.current;
    if (!canvas || !gl || !program) return;

    const c1 = colorToRgb(color1);
    const c2 = colorToRgb(color2);
    const c3 = colorToRgb(color3);

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    const render = () => {
      resize();
      const t = performance.now() / 1000 - startTimeRef.current;

      gl.uniform2f(
        gl.getUniformLocation(program, "iResolution"),
        canvas.width,
        canvas.height
      );
      gl.uniform1f(gl.getUniformLocation(program, "iTime"), t);
      gl.uniform1f(gl.getUniformLocation(program, "uTimeSpeed"), timeSpeed);
      gl.uniform1f(gl.getUniformLocation(program, "uColorBalance"), colorBalance);
      gl.uniform1f(gl.getUniformLocation(program, "uWarpStrength"), warpStrength);
      gl.uniform1f(gl.getUniformLocation(program, "uWarpFrequency"), warpFrequency);
      gl.uniform1f(gl.getUniformLocation(program, "uWarpSpeed"), warpSpeed);
      gl.uniform1f(gl.getUniformLocation(program, "uWarpAmplitude"), warpAmplitude);
      gl.uniform1f(gl.getUniformLocation(program, "uBlendAngle"), blendAngle);
      gl.uniform1f(gl.getUniformLocation(program, "uBlendSoftness"), blendSoftness);
      gl.uniform1i(gl.getUniformLocation(program, "uBlendMode"), blendModeVal);
      gl.uniform1f(gl.getUniformLocation(program, "uRotationAmount"), rotationAmount);
      gl.uniform1f(gl.getUniformLocation(program, "uNoiseScale"), noiseScale);
      gl.uniform1f(gl.getUniformLocation(program, "uGrainAmount"), grainAmount);
      gl.uniform1f(gl.getUniformLocation(program, "uGrainScale"), grainScale);
      gl.uniform1f(gl.getUniformLocation(program, "uGrainAnimated"), grainAnimated ? 1 : 0);
      gl.uniform1f(gl.getUniformLocation(program, "uContrast"), contrast);
      gl.uniform1f(gl.getUniformLocation(program, "uGamma"), gamma);
      gl.uniform1f(gl.getUniformLocation(program, "uSaturation"), saturation);
      gl.uniform2f(gl.getUniformLocation(program, "uCenterOffset"), centerOffsetX, centerOffsetY);
      gl.uniform1f(gl.getUniformLocation(program, "uZoom"), zoom);
      gl.uniform3f(gl.getUniformLocation(program, "uColor1"), c1[0], c1[1], c1[2]);
      gl.uniform3f(gl.getUniformLocation(program, "uColor2"), c2[0], c2[1], c2[2]);
      gl.uniform3f(gl.getUniformLocation(program, "uColor3"), c3[0], c3[1], c3[2]);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animRef.current = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animRef.current);
  }, [
    color1, color2, color3, timeSpeed, colorBalance, warpStrength,
    warpFrequency, warpSpeed, warpAmplitude, blendAngle, blendSoftness,
    blendModeVal, rotationAmount, noiseScale, grainAmount, grainScale,
    grainAnimated, contrast, gamma, saturation, centerOffsetX, centerOffsetY, zoom,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
};

export default GradientBackground;
