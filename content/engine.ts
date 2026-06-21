import type { EngineModule, EngineModuleId } from "@/lib/types";

/** 공통 엔진 DNA — 모든 에이전트가 공유. 각 모듈은 실제 제품 화면과 함께 노출. */
export const ENGINE_MODULES: EngineModule[] = [
  {
    id: "dashboard",
    nameKey: "engine.modules.dashboard.name",
    descKey: "engine.modules.dashboard.desc",
    screenshot: { altKey: "engine.modules.dashboard.shotAlt", kind: "dashboard", ratio: "16/9" },
  },
  {
    id: "graphRag",
    nameKey: "engine.modules.graphRag.name",
    descKey: "engine.modules.graphRag.desc",
    screenshot: { altKey: "engine.modules.graphRag.shotAlt", kind: "graph", ratio: "16/9" },
  },
  {
    id: "docgen",
    nameKey: "engine.modules.docgen.name",
    descKey: "engine.modules.docgen.desc",
    screenshot: { altKey: "engine.modules.docgen.shotAlt", kind: "report", ratio: "16/9" },
  },
  {
    id: "hitlTodo",
    nameKey: "engine.modules.hitlTodo.name",
    descKey: "engine.modules.hitlTodo.desc",
    screenshot: { altKey: "engine.modules.hitlTodo.shotAlt", kind: "table", ratio: "16/9" },
  },
  {
    id: "automation",
    nameKey: "engine.modules.automation.name",
    descKey: "engine.modules.automation.desc",
    screenshot: { altKey: "engine.modules.automation.shotAlt", kind: "generic", ratio: "16/9" },
  },
];

export function getEngineModule(id: EngineModuleId): EngineModule | undefined {
  return ENGINE_MODULES.find((m) => m.id === id);
}

export function getEngineModules(ids: EngineModuleId[]): EngineModule[] {
  return ids
    .map((id) => getEngineModule(id))
    .filter((m): m is EngineModule => Boolean(m));
}
