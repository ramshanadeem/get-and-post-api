/* function Post() {
    return (
        <>

        </>
    )
} */

import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { fetchPost } from '../store/postSlice'

import useState from 'react'
import { useDispatch, useSelector } from 'react-redux'
export const AdddPost = () => {
    // Notice that we have to initialize ALL of fields with values. These
    // could come from props, but since we don't want to prefill this form,
    // we just use an empty string. If you don't do this, React will yell
    // at you.
    const fetchPosts = useSelector(state => state.posts);
    const dispatch = useDispatch()
    // const [title, settitle] = useState()
    // const handleChange = (e) => {
    //     settitle(e.target.value)

    // }
    // console.log(settitle)

    const formik = useFormik({
        initialValues: {
            userId: '1',
            id: '',
            title: '',
            body: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">User Id</label>
            <input
                id="userId"
                name="userId"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.userId}
            /><br></br>
            <label htmlFor="firstName">id</label>
            <input
                id="id"
                name="id"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.id}
            /><br></br>
            <label htmlFor="title">title</label>
            <input
                id="title"
                name="title"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.title}
            /><br></br>
            <label htmlFor="body">body</label>
            <input
                id="body"
                name="body"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.body}
            /><br></br>
            <button type="submit">Submit</button>
        </form>
    );
};