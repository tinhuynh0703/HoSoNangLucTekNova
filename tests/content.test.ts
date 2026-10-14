import { describe, expect, it } from "vitest";
import { services } from "../app/data/site";
import {
  projects,
  projectFilters,
  projectStats,
  projectPartners,
  projectTrustStats,
} from "../app/data/projectsLegacy";
import {
  servicePartners,
  servicePillars,
  serviceProcess,
  serviceSla,
  serviceStats,
} from "../app/data/servicesLegacy";
import { leadSchema } from "../shared/lead";

describe("migrated content", () => {
  it("keeps all seven reference records and the expected categories", () => {
    expect(projects).toHaveLength(7);
    expect(projectStats).toHaveLength(3);
    expect(projectPartners).toHaveLength(12);
    expect(projectTrustStats).toHaveLength(3);
    expect(new Set(projects.map((project) => project.id)).size).toBe(7);
    expect(projects.every((project) => project.status === "SOURCE_ONLY")).toBe(
      true,
    );
    expect(
      projects.every((project) =>
        projectFilters.some((filter) => filter.id === project.category),
      ),
    ).toBe(true);
  });
  it("keeps the source services, partners, pillars, process and SLA rows", () => {
    expect(services).toHaveLength(6);
    expect(serviceStats).toHaveLength(4);
    expect(servicePartners).toHaveLength(18);
    expect(servicePillars).toHaveLength(4);
    expect(serviceProcess).toHaveLength(4);
    expect(serviceSla).toHaveLength(4);
  });
});

describe("lead schema", () => {
  const valid = {
    kind: "contact",
    name: "Nguyễn Văn A",
    phone: "0935722579",
    email: "",
    organization: "",
    interest: "Y tế & bệnh án điện tử",
    message: "",
    website: "",
  };
  it("accepts a complete, valid request", () => {
    expect(leadSchema.safeParse(valid).success).toBe(true);
  });
  it("rejects invalid phone and hidden bot input", () => {
    expect(leadSchema.safeParse({ ...valid, phone: "123" }).success).toBe(
      false,
    );
    expect(
      leadSchema.safeParse({ ...valid, website: "spam.example" }).success,
    ).toBe(false);
  });
  it("requires an interest and validates optional email", () => {
    expect(leadSchema.safeParse({ ...valid, interest: "" }).success).toBe(
      false,
    );
    expect(leadSchema.safeParse({ ...valid, email: "invalid" }).success).toBe(
      false,
    );
  });
  it("requires work email for a solution consultation", () => {
    expect(leadSchema.safeParse({ ...valid, kind: "solution" }).success).toBe(
      false,
    );
    expect(
      leadSchema.safeParse({
        ...valid,
        kind: "solution",
        email: "a@example.com",
      }).success,
    ).toBe(true);
  });
});
