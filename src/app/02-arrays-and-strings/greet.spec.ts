import { greet } from "./greet";

describe('greet', () => {
    expect(greet('Josh')).toContain('Welcome Josh')
})