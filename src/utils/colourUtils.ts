import p5 from "p5";

export function randomColour(p: p5) {
  p.push();
  p.colorMode(p.HSB);
  const c = p.color(p.random(360), p.random(40, 100), 100);
  p.pop();
  return c;
}