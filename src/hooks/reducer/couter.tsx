export function fromReducer(state: any, action: any) {
  switch (action.type) {
    case "update":
      return { ...state, ...action.data };
    default:
      return state;
  }
}
