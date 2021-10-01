import React from 'react';
import PropTypes from 'prop-types';
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';
import Select from 'react-select';
import { ErrorMessage } from 'formik';

SelectField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    options: PropTypes.array,
};

SelectField.defaultProps = {
    label: '',
    placeholder: '',
    disabled: false,
    options: [],
};

function SelectField(props) {
    const { field, form, type, label, placeholder, disabled, options } = props;
    const { name, value } = field;
    const selectedOption = options.find((option) => option.value === value);
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];
    const handleSelectedOptionChange = (selectedOption) => {
        const selectedValue = selectedOption ? selectedOption.value : selectedOption;

        const changeEvent = {
            target: {
                name: name,
                value: selectedValue,
            },
        };
        field.onChange(changeEvent);
    };
    return (
        <FormGroup>
            {Label && <Label for={name}>{label}</Label>}
            <Select
                id={name}
                {...field}
                value={selectedOption}
                onChange={handleSelectedOptionChange}
                isDisabled={disabled}
                placeholder={placeholder}
                options={options}
                className={showError ? 'is-invalid' : ''}
            />
            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    );
}

export default SelectField;
