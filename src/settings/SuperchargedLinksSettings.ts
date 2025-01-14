import Field from "src/Field"

export interface SuperchargedLinksSettings {
	targetAttributes: Array<string>;
	targetTags: boolean;
	presetFields: Array<Field>;
	displayFieldsInContextMenu: boolean;
	globallyIgnoredFields: Array<string>;
	getFromInlineField: boolean;
	classFilesPath: string;
	enableEditor: boolean;
	enableFileList: boolean;
	enableBacklinks: boolean;
}

export const DEFAULT_SETTINGS: SuperchargedLinksSettings = {
	targetAttributes: [],
	targetTags: true,
	presetFields: [],
	displayFieldsInContextMenu: true,
	globallyIgnoredFields: [],
	classFilesPath: "",
	getFromInlineField: true,
	enableEditor: true,
	enableFileList: true,
	enableBacklinks: true
}