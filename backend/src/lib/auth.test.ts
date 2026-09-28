import { afterEach, describe, expect, it, vi } from "vitest";
import { isConfiguredSuperAdmin } from "./auth";

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("isConfiguredSuperAdmin", () => {
  it("allows only the configured super-admin email", () => {
    vi.stubEnv("SUPER_ADMIN_EMAIL", "owner@example.org");

    expect(
      isConfiguredSuperAdmin({
        email: "OWNER@example.org",
        role: "SUPER_ADMIN",
      }),
    ).toBe(true);
    expect(
      isConfiguredSuperAdmin({
        email: "other@example.org",
        role: "SUPER_ADMIN",
      }),
    ).toBe(false);
    expect(
      isConfiguredSuperAdmin({
        email: "owner@example.org",
        role: "ADMIN",
      }),
    ).toBe(false);
  });

  it("supports the legacy admin email and denies access without a configured email", () => {
    vi.stubEnv("SUPER_ADMIN_EMAIL", "");
    vi.stubEnv("ADMIN_EMAIL", "owner@example.org");

    expect(
      isConfiguredSuperAdmin({
        email: "owner@example.org",
        role: "SUPER_ADMIN",
      }),
    ).toBe(true);

    vi.stubEnv("ADMIN_EMAIL", "");
    expect(
      isConfiguredSuperAdmin({
        email: "owner@example.org",
        role: "SUPER_ADMIN",
      }),
    ).toBe(false);
  });
});
