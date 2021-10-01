import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import Images from 'constants/images';
import InputField from 'custom-fields/InputField';
import RandomPhotoField from 'custom-fields/RandomPhotoField';
import SelectField from 'custom-fields/SelectField';
import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';
import { Button, FormGroup, Input, Label, Spinner } from 'reactstrap';
import * as yup from 'yup';
PhotoForm.propTypes = {
    onSubmit: PropTypes.func,
};

function PhotoForm({ onSubmit }) {
    const initialValues = {
        title: '',
        categoryId: null,
        photo: '',
    };

    const validationSchema = yup.object().shape({
        title: yup.string().required('This field is required!'),
        categoryId: yup.number().required('This field is required!').nullable(),
        photo: yup.string().required('This field is required'),
    });
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {(formikProps) => {
                const { values, errors, touched, isSubmitting } = formikProps;
                console.log(values, errors, touched);
                // do somethings here...
                return (
                    <Form>
                        <FastField
                            name="title"
                            component={InputField}
                            label="Title"
                            placeholder="Eg: Wow nature ..."
                        />

                        <FastField
                            name="categoryId"
                            component={SelectField}
                            label="Category"
                            placeholder="What's your photo category?"
                            options={PHOTO_CATEGORY_OPTIONS}
                        />

                        <FastField name="photo" component={RandomPhotoField} label="photo" />

                        <FormGroup>
                            <Button color="primary" type="submit">
                                {isSubmitting && <Spinner size="sm" />}
                                Add to album
                            </Button>
                        </FormGroup>
                    </Form>
                );
            }}
        </Formik>
    );
}

export default PhotoForm;
