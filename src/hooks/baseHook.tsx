import { useState } from "react";

export function useBasicHook() {
  const [dataState, setDataState] = useState({
    serverData: {},
    selections: {},
  });
  const [viewState, setViewState] = useState({
    menuExpanded: false,
    submitFormData: {},
  });

  const toggleMenuExpand = () => {
    setViewState({
      menuExpanded: !viewState.menuExpanded,
      submitFormData: viewState.submitFormData,
    });
  };
  return {
    dataState: dataState,
    viewState: viewState,
    toggleMenuExpand: toggleMenuExpand,
  };
}
