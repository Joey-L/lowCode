class Stage {
  constructor() {
    this.data = {};
    this.comps = [];
  }

  getStageData = () => {
    return { ...this.data };
  };
}
