import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageResize from 'quill-image-resize-module-react';

Quill.register('modules/imageResize', ImageResize);

export default function Editor({ value, onChange }) {

    const modules = {
        toolbar: [
            [{ header: '1' }, { header: '2' }, { font: [] }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{align: [] }],
            [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' }
            ],
            ['link', 'image', 'video'],
            ['clean']
        ],
        clipboard: {
            // toggle to add extra line breaks when pasting HTML:
            matchVisual: false
        },
        imageResize: {
        parchment: Quill.import('parchment'),
        modules: ['Resize', 'DisplaySize']
        }
    };



    return (
        <ReactQuill value={value} 
                theme='snow'
                modules={modules} 
                onChange={onChange} />
    );
}
