import { expect, vi, afterEach } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'

expect.extend(matchers)

afterEach(cleanup)

// matchMedia bug https://jestjs.io/docs/29.4/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
Object.defineProperty(window, 'matchMedia', {
	writable: true,
	value: vi.fn().mockImplementation(query => ({
		matches: false,
		media: query,
		onchange: null,
		addListener: () => {},
		removeListener: () => {},
		addEventListener: () => {},
		removeEventListener: () => {},
		dispatchEvent: () => {},
	})),
})

// Resize.Observer bug https://stackoverflow.com/questions/68679993/referenceerror-resizeobserver-is-not-defined
window.ResizeObserver = vi.fn().mockImplementation(() => ({
	observe: vi.fn(),
	unobserve: vi.fn(),
	disconnect: vi.fn(),
}))

// https://mantine.dev/guides/vitest/
const { getComputedStyle } = window
window.getComputedStyle = elt => getComputedStyle(elt)
