export type SelectionType = {
  partition: string;
  name: string;
};

export type SelectionGType = {
  selectionName: string;
  selection: SelectionType[];
  selectionId: string;
};
