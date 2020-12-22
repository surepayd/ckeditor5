/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties'; // <--- ADDED
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties'; // <--- ADDED

import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';     // <--- ADDED
import ImageResizeEditing from '@ckeditor/ckeditor5-image/src/imageresize/imageresizeediting';
import ImageResizeButtons from '@ckeditor/ckeditor5-image/src/imageresize/imageresizebuttons';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	CKFinder,
	EasyImage,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	TextTransformation,
	Alignment,                                                            // <--- ADDED
	ImageResizeEditing,                                                            // <--- ADDED
	ImageResizeButtons,                                                            // <--- ADDED
	TableProperties,                                                            // <--- ADDED
	TableCellProperties,                                                            // <--- ADDED
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'alignment',                                                 // <--- ADDED
			'bold',
			'italic',
			'link',
			'bulletedList',
			'numberedList',
			'|',
			'indent',
			'outdent',
			'|',
			'imageUpload',
			'blockQuote',
			'insertTable',
			'mediaEmbed',
			'undo',
			'redo'
		]
	},
	image: {
		styles: [
		  'alignLeft', 'alignCenter', 'alignRight',  // <--- ADDED
		],
		toolbar: [
			'imageStyle:full',
			'imageStyle:side',
			'|',
			'imageStyle:alignLeft', 'imageStyle:alignCenter', 'imageStyle:alignRight',  // <--- ADDED
			'|',
			'imageResize',  // <--- ADDED
			'|',
			'imageTextAlternative',
		],
		resizeOptions: [
			{
			name: 'imageResize:original',
			value: null,
			icon: 'original',
			},
			{
			name: 'imageResize:10',
			value: '10',
			icon: 'medium',
			},
			{
			name: 'imageResize:20',
			value: '20',
			icon: 'medium',
			},
			{
			name: 'imageResize:30',
			value: '30',
			icon: 'medium',
			},
			{
			name: 'imageResize:40',
			value: '40',
			icon: 'medium',
			},
			{
			name: 'imageResize:50',
			value: '50',
			icon: 'medium',
			},
			{
			name: 'imageResize:60',
			value: '60',
			icon: 'large',
			},
			{
			name: 'imageResize:70',
			value: '70',
			icon: 'large',
			},
			{
			name: 'imageResize:80',
			value: '80',
			icon: 'large',
			},
			{
			name: 'imageResize:90',
			value: '90',
			icon: 'large',
			},
		],
	},
	table: {
		contentToolbar: [
			'tableColumn', 'tableRow', 'mergeTableCells',
                'tableProperties', 'tableCellProperties'// <--- ADDED
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
