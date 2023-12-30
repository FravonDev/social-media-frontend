import { renderHook } from "@testing-library/react";

import { useAuth } from ".";

describe("useAuth", () => {
  it("should be defined", () => {
    const { result } = renderHook(() => useAuth());
    console.log(result);
    expect(result).toBeDefined();
  });

  it("should return an object with the correct properties", () => {
    const { result } = renderHook(() => useAuth());

    expect(result.current.login).toBe("function");
    expect(result.current.logout).toBe("function");
  });
});
