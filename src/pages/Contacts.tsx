import { ContactsMain, ContactsWrapper, Map } from "../components/Contacts/Contacts.style";

export function Constacts(): JSX.Element {
    return (
        <ContactsMain>
            <ContactsWrapper>
                <ul>
                    <li>
                        Адрес: г. Бор, ул.Интернациональная, 135Б
                    </li>
                    <li>
                        Телефон: +7 (904) 782-46-36
                    </li>
                    <li>
                        Телефон: +7 (83159) 6-97-97
                    </li>
                    <li>
                        E-mail: steklo1@list.ru
                    </li>
                </ul>

                <Map 
                title="location"
                src="https://yandex.ru/map-widget/v1/?ll=44.100125%2C56.369176&mode=whatshere&whatshere%5Bpoint%5D=44.097298%2C56.369816&whatshere%5Bzoom%5D=17&z=17.61" 
                >
                </Map>
            </ContactsWrapper>
        </ContactsMain>
    );
}