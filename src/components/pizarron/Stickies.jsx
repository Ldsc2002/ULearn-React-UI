import React, { Component } from 'react'
import { Editor, EditorState, ContentState } from 'draft-js'
import moment from 'moment'
import { WidthProvider, Responsive } from 'react-grid-layout'
import ContentEditable from './ContentEditable'
import { db } from '../firebase/firebase'
import ScreenContext from '../app/ScreenContext'

const ResponsiveReactGridLayout = WidthProvider(Responsive)

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1)
    }
    return `${s4() + s4()}-${s4()}-${s4()}-${
        s4()}-${s4()}${s4()}${s4()}`
}

function tranformEditorState(notes) {
    const notesData = notes.default || notes
    const data = notesData.map((note) => {
        const text = note.text || ''
        note.editorState = note.editorState || EditorState.createWithContent(ContentState.createFromText(text))
        return note
    })
    return data
}

/* istanbul ignore next */
function transformContentState(notes) {
    const clonedNotes = Object.assign([], notes)
    const data = clonedNotes.map((note) => {
        note.text = note.editorState.getCurrentContent().getPlainText()
        return note
    })
    return data
}

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: props.notes ? tranformEditorState(props.notes) : [],
            dateFormat: props.dateFormat || 'lll',
        }
        this.createBlankNote = this.createBlankNote.bind(this)
        this.renderNote = this.renderNote.bind(this)
        this.onLayoutChange = this.onLayoutChange.bind(this)
        this.onBreakpointChange = this.onBreakpointChange.bind(this)
        this.university = props.university//= this.context.userInfo.university
        this.type = props.type // this.context.userInfo.type
    }

    componentDidMount() {
        /* istanbul ignore next */
        if (this.props.notes && !this.props.notes.length) {
            this.fetch()
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.notes && nextProps.notes.length) {
            this.setState({
                notes: tranformEditorState(nextProps.notes),
            })
        }
        this.setState({
            dateFormat: nextProps.dateFormat || 'lll',
        })
    }

    /* istanbul ignore next */
    handleTitleChange(html, currentNote) {
        currentNote.disable = false

        const { notes } = this.state
        notes.forEach((note) => {
            if (currentNote.id === note.id) {
                note.title = html.target.value
            }
        })
        this.setState({
            notes,
        }, () => {
            if (this.props.onTitleChange) {
                this.props.onTitleChange(html, currentNote)
            }
        })
    }

    onBreakpointChange(cols) {
        this.setState({
            cols,
        })
    }

    /* istanbul ignore next */
    onChange(editorState, currentNote) {
        currentNote.disable = false

        const { notes } = this.state
        const { dateFormat } = this.state
        notes.forEach((note) => {
            if (currentNote.id === note.id) {
                note.editorState = editorState
                note.timeStamp = moment().format(dateFormat)
            }
        })

        if (typeof this.props.onChange === 'function') {
            this.props.onChange(transformContentState(this.state.notes), 'update')
        }
    }

    /* istanbul ignore next */
    noteFirebase(note) {
        const { title } = note
        const { text } = note
        const date = note.timeStamp
        const { id } = note

        db.collection('notitas').doc(this.university).collection(this.university).doc(id)
            .set({
                content: text,
                date,
                title,
            })
    }

    deleteNote(currentNote) {
        const { notes } = this.state
        const { id } = currentNote

        db.collection('notitas').doc(this.university).collection(this.university).doc(id)
            .delete()

        /* istanbul ignore next */
        notes.forEach((note, index) => {
            if (currentNote.id === note.id) {
                notes.splice(index, 1)
            }
        })
        /* istanbul ignore next */
        this.setState({
            notes,
        }, () => {
            if (typeof this.props.onChange === 'function') {
                this.props.onChange(this.state.notes, 'delete')
                if (typeof this.props.onDelete === 'function') {
                    this.props.onDelete(currentNote)
                }
            }
        })
    }

    createBlankNote() {
        const { dateFormat } = this.state
        const grid = this.props.grid || {}
        const uid = guid()
        const note = {
            grid: {
                i: `${uid}`,
                x: this.state.notes.length * 2 % (this.state.cols || 12),
                y: Infinity, // puts it at the bottom
                w: grid.w || 2,
                h: grid.h || 2,
            },
            id: uid,
            editorState: EditorState.createEmpty(),
            title: 'Título',
            color: this.generateRandomColors(),
            degree: this.generateRandomDegree(-2, 2),
            timeStamp: moment().format(dateFormat),
            contentEditable: true,
            disable: true,
        }
        this.setState({
            // Add a new item. It must have a unique key!
            notes: this.state.notes.concat(note),
        })
        /* istanbul ignore if */
        if (typeof this.props.onAdd === 'function') {
            this.props.onAdd(note)
        }
    }

    createNote(titulo, content, date, id, length) {
        const grid = this.props.grid || {}
        const uid = guid()
        const note = {
            grid: {
                i: `${uid}`,
                x: length * 2 % (this.state.cols || 12),
                y: Infinity, // puts it at the bottom
                w: grid.w || 2,
                h: grid.h || 2,
            },

            id,
            editorState: EditorState.createWithContent(ContentState.createFromText(content)),
            title: titulo,
            color: this.generateRandomColors(),
            degree: this.generateRandomDegree(-2, 2),
            timeStamp: date,
            contentEditable: false,
            disable: true,
        }

        /* istanbul ignore if */
        if (typeof this.props.onAdd === 'function') {
            this.props.onAdd(note)
        }

        return note
    }

    /* istanbul ignore next */
    onLayoutChange(layout) {
        const { notes } = this.state
        notes.forEach((note) => {
            layout.forEach((grid) => {
                if (grid.i === note.id) {
                    note.grid = grid
                }
            })
        })
        this.setState({
            notes,
        }, () => {
            if (typeof this.props.onChange === 'function') {
                this.props.onChange(this.state.notes, 'layout')
                if (typeof this.props.onLayoutChange === 'function') {
                    this.props.onLayoutChange(layout)
                }
            }
        })
    }

    generateRandomDegree(max, min) {
        return `${Math.floor(Math.random() * (max - min + 1)) + min}deg`
    }

    generateRandomColors() {
        const colors = ['#B32168', '#0487A4', '#F7C536', '#E84A64', '#10B6C1', '#E84A64']
        return colors[(Math.floor(Math.random() * (colors.length - 1)))]
    }

    fetch() {
        const titles = []
        const contents = []
        const dates = []
        const id = []

        const uid = guid()

        /* istanbul ignore next */
        db.collection('notitas').doc(this.university).collection(this.university)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    titles.push(doc.get('title'))
                    contents.push(doc.get('content'))
                    dates.push(doc.get('date'))
                    id.push(doc.id)
                })

                const newNotes = []

                for (let i = 0; i < titles.length; i++) {
                    newNotes.push(this.createNote(titles[i], contents[i], dates[i], id[i], newNotes.length))
                }

                if (titles.length === 0) {
                    newNotes.push(this.createNote('Hola', 'Esto es un ejemplo', 'Mayo 1, 2022 3:17 PM', uid))
                }

                this.setState({
                    // Add a new item. It must have a unique key!
                    notes: newNotes,
                })
            })
    }

    /* istanbul ignore next */
    isSuperUser() {
        if (this.type) {
            return false
        }
        return true
    }

    renderNote(note) {
        const closeStyle = { display: 'block', ...this.props.closeStyle || {} }
        const addStyle = this.props.addStyle || {}
        const closeIcon = this.isSuperUser()
        const addIcon = this.props.addIcon || ''
        const noteStyle = {
            background: note.color,
            transform: note.degree,
            ...this.props.noteStyle || {},
        }
        const noteHeaderStyle = { display: 'block', ...this.props.noteHeaderStyle || {} }
        const noteBodyStyle = this.props.noteBodyStyle || {}
        const noteTitleStyle = { display: 'block', ...this.props.noteTitleStyle || {} }
        const noteFooterStyle = { display: 'block', ...this.props.noteFooterStyle || {} }
        const { i } = note.grid
        const { grid } = note

        /* istanbul ignore next */
        return (
            <div key={i} data-grid={grid}>
                <aside
                    className="note-wrap note tape"
                    style={noteStyle}
                >

                    <div className="pushpin tilted">
                        <div className="pinhead" />
                        <div className="pinbase" />
                        <div className="pinshaft" />
                        <div className="pinpoint" />
                    </div>

                    <div className="note-header" style={noteHeaderStyle}>
                        <div
                            className="add"
                            onClick={this.createBlankNote}
                            style={addStyle}
                        >
                            {addIcon}
                        </div>
                        <div className="title" stycle={noteTitleStyle}>
                            <ContentEditable
                                html={note.title}
                                onChange={(html) => this.handleTitleChange(html, note)}
                            />
                        </div>
                        <div
                            className="close"
                            style={closeStyle}
                            onClick={() => this.deleteNote(note)}
                        >
                            {closeIcon}
                        </div>
                    </div>
                    <input disabled={note.disable} className="note-footerB" style={noteFooterStyle} type="button" id="save" value="Guardar" onClick={() => this.noteFirebase(note)} />
                    <div className="note-body" id="myInput" style={noteBodyStyle}>
                        <Editor
                            editorState={note.editorState}
                            onChange={(editorState) => this.onChange(editorState, note)} // eesta
                            placeholder="Comparte tus pensamientos..."
                        />

                    </div>
                    <div
                        className="note-footer"
                        style={noteFooterStyle}
                    >
                        {note.timeStamp}
                    </div>

                </aside>
            </div>
        )
    }

    render() {
        const gridProps = this.props.grid || {}
        const grid = {
            className: 'layout',
            cols: gridProps.cols || {
                lg: 12, md: 10, sm: 6, xs: 4, xxs: 2,
            },
            rowHeight: gridProps.rowHeight || 100,
            isDraggable: true,
            isResizable: true,
            useCSSTransforms: true,
            margin: gridProps.margin,
        }
        const wrapperStyle = this.props.wrapperStyle || {}
        return (
            <div className="react-stickies-wrapper clearfix" style={wrapperStyle}>
                <ResponsiveReactGridLayout
                    onLayoutChange={this.onLayoutChange}
                    {...grid}
                >
                    {this.state.notes.map(this.renderNote)}
                </ResponsiveReactGridLayout>
            </div>
        )
    }
}
