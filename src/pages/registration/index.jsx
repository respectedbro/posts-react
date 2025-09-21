import {Typo} from '../../components/ui/Typo/index.jsx';
import {Container} from '../../components/ui/Container/index.jsx';
import {Field} from '../../components/ui/Field/index.jsx';
import {Input} from '../../components/ui/Input/index.jsx';
import {Form} from '../../components/ui/Form/index.jsx';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

export const RegistrationPage = () => {
    const [formValues, setFormValues] = useState({name: '', surname: '', email: '', password: ''});
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        try {
            const users = JSON.parse(localStorage.getItem('users'));
            const userId = Date.now();
            const newUser = {id: userId, ...formValues};

            if (!users) {
                localStorage.setItem('users', JSON.stringify([newUser]));
                alert('Регистрация прошла успешно')
                navigate('/auth')
                return;
            }

            if (users.find((user) => user.email === formValues.email)) {
                alert('Пользователь с такой эл. постой уже существует');
                return;
            }

            users.push(newUser);

            localStorage.setItem('users', JSON.stringify(users));
            alert('Регистрация прошла успешно')
        } catch (e) {
            console.error(e);
        }
    };

    const onChange = (name, value) => {
        setFormValues({...formValues, [name]: value});
    };

    const disabled = !formValues.email || !formValues.password;


    return (
        <Container>
            <Typo>Страница регистрации</Typo>
            <Form
                onSubmit={onSubmit}
                autoComplete="off"
            >
                <Field>
                    <Input
                        type="text"
                        name="name"
                        value={formValues.name}
                        placeholder="Имя"
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                    />
                </Field>
                <Field>
                    <Input
                        type="text"
                        name="surname"
                        value={formValues.surname}
                        placeholder="Фамилия"
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                    />
                </Field>
                <Field>
                    <Input
                        type="email"
                        name="email"
                        value={formValues.email}
                        placeholder="Почта"
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                        autoComplete="off"
                    />
                </Field>
                <Field>
                    <Input
                        type="password"
                        name="password"
                        value={formValues.password}
                        placeholder="Пароль"
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                        autoComplete="off"
                    />
                </Field>
                <button type="submit" disabled={disabled}>Регистрация</button>
            </Form>
        </Container>
    );
};


