import { Container } from "../../../../components/ui/Container/index.jsx";
import * as SC from "./styles.js";
import { Typo } from "../../../../components/ui/Typo/index.jsx";
import { useState } from "react";
import {Form} from '../../../../components/ui/Form/index.jsx';
import {Field} from '../../../../components/ui/Field/index.jsx';
import {Input} from '../../../../components/ui/Input/index.jsx';

const DEFAULT_VALUES = { title: "", body: "" };

export const PostForm = ({title, onSubmitForm, defaultValues}) => {
  const [formValues, setFormValues] = useState(defaultValues || DEFAULT_VALUES);

  const onChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    onSubmitForm(formValues)

   !defaultValues && setFormValues(DEFAULT_VALUES);
  };

  const disabled = !formValues.title || !formValues.body;

  return (
    <Container>
      <Typo>{title}</Typo>
      <Form onSubmit={onSubmit}>
        <Field>
          <Input
            type="text"
            name="title"
            value={formValues.title}
            placeholder="Заголовок"
            onChange={(e) => onChange(e.target.name, e.target.value)}
          />
        </Field>
        <Field>
          <SC.Textarea
            name="body"
            rows={10}
            cols={30}
            value={formValues.body}
            onChange={(e) => onChange(e.target.name, e.target.value)}
          />
        </Field>
        <SC.Button type="submit" disabled={disabled}>
          Сохранить
        </SC.Button>
      </Form>
    </Container>
  );
};
