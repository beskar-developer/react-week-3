/* eslint-disable func-style */
import type { CamelCase } from "@shared-vendor/types";

type Role = "USER" | "ADMIN";

const ROLES: Record<CamelCase<Role>, Role> = {
  user: "USER",
  admin: "ADMIN",
};

export type AclAccess = {
  and: (role: Role) => AclAccess;
  or: (role: Role) => AclAccess;
  check: (roles: Role[]) => boolean;
};

export const createAccess = (role: Role): AclAccess => {
  const check = (userRoles: Role[]) => userRoles.includes(role);

  function and(role: Role): AclAccess {
    return {
      check: (userRoles: Role[]) => check(userRoles) && userRoles.includes(role),
      and,
      or,
    };
  }

  function or(role: Role): AclAccess {
    return {
      check: (userRoles: Role[]) => check(userRoles) || userRoles.includes(role),
      and,
      or,
    };
  }

  return { and, or, check };
};

export const useACL = () => {
  const userRoles = [ROLES.user];

  const hasRole = (role: Role) => userRoles.includes(role);

  const createChecker = (value: boolean) => {
    const and = (role: Role) => createChecker(value && hasRole(role));
    const or = (role: Role) => createChecker(value || hasRole(role));

    return {
      and,
      or,
      value,
    };
  };

  const is = (role: Role) => createChecker(hasRole(role));
  const hasAccess = (access: AclAccess) => access?.check?.(userRoles) ?? true;

  return {
    roles: ROLES,
    is,
    hasAccess,
  };
};
