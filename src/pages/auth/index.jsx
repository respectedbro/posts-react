import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Typo} from '../../components/ui/Typo/index.jsx';
import {Form} from '../../components/ui/Form/index.jsx';
import {Field} from '../../components/ui/Field/index.jsx';
import {Input} from '../../components/ui/Input/index.jsx';
import {Container} from '../../components/ui/Container/index.jsx';
import {useDispatch} from 'react-redux';
import {login} from '../../redux/slices/authSlice.js';

export const AuthPage = () => {
    const [formValues, setFormValues] = useState({email: '', password: ''});
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onChange = (name, value) => {
        setFormValues({...formValues, [name]: value});
    };

    const onSubmit = (e) => {
        e.preventDefault()
        try {
            const users = JSON.parse(localStorage.getItem('users'));

            if (!users) {
                alert('Данный пользователь не найден')
            }

            const currentUser = users.find((user) => user.email === formValues.email && user.password === formValues.password)

            if (!currentUser) {
                alert('Данный пользователь не найден')
            }

            dispatch(login(currentUser))

            navigate('/posts')

        } catch (e) {
            console.error(e);
        }
    }

    const disabled = !formValues.email || !formValues.password;
    return (
        <Container>
            <Typo>Страница авторизации</Typo>
            <Form
                onSubmit={onSubmit}
                autoComplete="off"
            >
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
                <button type="submit" disabled={disabled}>Авторизация</button>
            </Form>
        </Container>
    )
}
