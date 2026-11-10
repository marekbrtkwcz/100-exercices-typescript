import { describe, it, expect } from 'vitest';
import { rgbToHex } from './exercise';

describe('rgbToHex', () => {
  it('czerwony', () => { expect(rgbToHex(255, 0, 0)).toBe('#ff0000'); });
  it('zielony z niepełnym bajtem', () => { expect(rgbToHex(0, 255, 128)).toBe('#00ff80'); });
  it('czarny', () => { expect(rgbToHex(0, 0, 0)).toBe('#000000'); });
  it('biały', () => { expect(rgbToHex(255, 255, 255)).toBe('#ffffff'); });
});
