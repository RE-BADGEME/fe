export const defaultSelection = [
  {
    partition: 'skill',
    name: 'SKILL',
  },
  {
    partition: 'ui',
    name: 'UI',
  },
  {
    partition: 'test',
    name: 'TEST',
  },
  {
    partition: 'cloud',
    name: 'CLOUD',
  },
  {
    partition: 'lint',
    name: 'LINT',
  },
];

export const librarySelection = [
  {
    partition: 'util',
    name: 'UTILITY',
  },
  {
    partition: 'dnd',
    name: 'DRAG & DROP',
  },
  {
    partition: 'scroll',
    name: 'SCROLL',
  },
  {
    partition: 'valid',
    name: 'VALIDATION',
  },
  {
    partition: 'file',
    name: 'FILE UPLOAD',
  },
  {
    partition: 'form',
    name: 'FORM',
  },
  {
    partition: 'client',
    name: 'CLIENT STATE MANAGEMENT',
  },
  {
    partition: 'server',
    name: 'SERVER STATE MANAGEMENT',
  },
  {
    partition: 'swipe',
    name: 'SWIPER',
  },
];

export const basicSelection = [
  {
    partition: 'ide',
    name: 'IDE',
  },
  {
    partition: 'build',
    name: 'BUILD',
  },
  {
    partition: 'platform',
    name: 'PLATFORM',
  },
  {
    partition: 'package',
    name: 'PACKAGE MANAGER',
  },
  {
    partition: 'office',
    name: 'OFFICE TOOL',
  },
];

export const selection = [
  {
    selectionName: 'Default Selection',
    selection: defaultSelection,
    selectionId: 'default-selection',
  },
  {
    selectionName: 'Library Selection',
    selection: librarySelection,
    selectionId: 'library-selection',
  },
  {
    selectionName: 'Basic Selection',
    selection: basicSelection,
    selectionId: 'basic-selection',
  },
];

export const basicData = defaultSelection.map((item) => {
  return item.partition;
});

export const allSelection = [
  ...defaultSelection,
  ...librarySelection,
  ...basicSelection,
];
