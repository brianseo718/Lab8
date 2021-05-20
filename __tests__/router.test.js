/**
 * @jest-environment jsdom
 */

 import { TestScheduler } from 'jest';
import { pushToHistory } from '../scripts/router.js';

 describe('test length of history stack', () => {
    test('length of settings branch', () => {
        expect(pushToHistory("settings", 0).length).toBe(2);
    })
    test('length of entry branch', () => {
        expect(pushToHistory("entry", 1).length).toBe(3);
    })
    test('length of default branch', () => {
        expect(pushToHistory("", 0).length).toBe(4);
    })
 });

