import { describe, it, expect, vi } from 'vitest';
import { generateName, availableRaces, availableClasses } from './nameGenerator.js';

describe('availableRaces', () => {
	it('should contain Human, Elf, Dwarf', () => {
		expect(availableRaces).toEqual(['Human', 'Elf', 'Dwarf']);
	});
});

describe('availableClasses', () => {
	it('should contain Warrior, Mage, Rogue', () => {
		expect(availableClasses).toEqual(['Warrior', 'Mage', 'Rogue']);
	});
});

describe('generateName', () => {
	it('should return a string with two parts separated by a space', () => {
		const name = generateName('Human', 'Warrior');
		const parts = name.split(' ');
		expect(parts.length).toBeGreaterThanOrEqual(2);
	});

	it('should return a name starting with a known prefix', () => {
		const prefixes = ['Jon', 'Ari', 'Mar', 'Cal', 'Eli', 'Dar', 'Sam', 'Tom', 'Nia', 'Leo'];
		const name = generateName('Human', 'Warrior');
		const prefix = name.split(' ')[0];
		expect(prefixes).toContain(prefix);
	});

	it('should include a known suffix for the given class', () => {
		const suffixes = [
			'the Strong',
			'Shieldbearer',
			'of the Blade',
			'Ironfist',
			'Battleborn',
			'the Relentless'
		];
		const name = generateName('Human', 'Warrior');
		const suffix = name.slice(name.indexOf(' ')).trim();
		expect(suffixes).toContain(suffix);
	});

	it('should work for Elf Mage', () => {
		const elfPrefixes = ['Ela', 'Fin', 'Gal', 'Sil', 'Ael', 'Tho', 'Lir', 'Vel', 'Zir', 'Nil'];
		const mageSuffixes = [
			'Fireweaver',
			'Arclight',
			'the Spellbound',
			'the Mystic',
			'Stormbringer',
			'Voidwalker'
		];
		const name = generateName('Elf', 'Mage');
		const parts = name.split(' ');
		expect(elfPrefixes).toContain(parts[0]);
		expect(mageSuffixes).toContain(parts.slice(1).join(' '));
	});

	it('should work for Dwarf Rogue', () => {
		const dwarfPrefixes = ['Bor', 'Dur', 'Thro', 'Gim', 'Kil', 'Uth', 'Var', 'Bri', 'Kaz', 'Mol'];
		const rogueSuffixes = [
			'of the Shadows',
			'Whispercloak',
			'the Quick',
			'Nightstalker',
			'Daggerfall',
			'Silentblade'
		];
		const name = generateName('Dwarf', 'Rogue');
		const parts = name.split(' ');
		expect(dwarfPrefixes).toContain(parts[0]);
		expect(rogueSuffixes).toContain(parts.slice(1).join(' '));
	});

	it('should use Math.random under the hood', () => {
		const spy = vi.spyOn(Math, 'random');
		generateName('Human', 'Warrior');
		expect(spy).toHaveBeenCalledTimes(2);
		spy.mockRestore();
	});
});
