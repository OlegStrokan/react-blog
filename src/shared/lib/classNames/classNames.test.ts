import { classNames } from './classNames';

describe('classNames', () => {
    it('with only first param ', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    it('with additional class ', () => {
        const result = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(result);
    });

    it('with mods', () => {
        const result = 'someClass class1 class2 hovered scrollable';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: true },
            ['class1', 'class2'],
        )).toBe(result);
    });
    it('with mods false ', () => {
        const result = 'someClass class1 class2 hovered';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: false },
            ['class1', 'class2'],
        )).toBe(result);
    });
    it('with mods undefined ', () => {
        const result = 'someClass class1 class2 hovered';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: undefined },
            ['class1', 'class2'],
        )).toBe(result);
    });
});
