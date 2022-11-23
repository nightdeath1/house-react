import React from "react";
import { Button } from '../Button/Button';
import {
  ContactsSection,
  ContactsContent,
  ContactsContainer,
  ContactsInfo,
  ContactsItem,
  MapLogo,
  PhoneLogo,
  MailLogo,
  ContactsForm,
  ContactsFormWrapper,
  LogoContainer,
  ItemTextContainer,
  FormItemContainer,
  FormItemInput,
  FormItemTextArea
} from "./ContactsElements";

const Contacts = () => {
  return (
    <ContactsSection>
      <ContactsContent>
        <h2>Contact Us</h2>
        {/* <p>Dalalalalaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p> */}
      </ContactsContent>
      <ContactsContainer>
        <ContactsInfo>
          <ContactsItem>
            <LogoContainer>
              <MapLogo />
            </LogoContainer>
            <ItemTextContainer>
              <h3>Address</h3>
              <p>802-10, Jugong 8 danjiapateu, Junggye 1(il)-dong, Nowon-gu, Seoul</p>
            </ItemTextContainer>
          </ContactsItem>
          <ContactsItem>
            <LogoContainer>
              <PhoneLogo />
            </LogoContainer>
            <ItemTextContainer>
              <h3>Phone</h3>
              <p>+8210-3765-5606</p>
            </ItemTextContainer>
          </ContactsItem>
          <ContactsItem>
            <LogoContainer>
              <MailLogo />
            </LogoContainer>
            <ItemTextContainer>
              <h3>Email</h3>
              <p>JackEstate@gmail.com</p>
            </ItemTextContainer>
          </ContactsItem>
        </ContactsInfo>
        <ContactsFormWrapper>
          <ContactsForm>
            <h2>Send Message</h2>
            <FormItemContainer>
                <FormItemInput type='text' placeholder="Full Name" required="required" />

            </FormItemContainer>
            <FormItemContainer>
                <FormItemInput type='text' placeholder="Email" required="required" />

            </FormItemContainer>
            <FormItemContainer>
                <FormItemTextArea placeholder="Leave your message"required="required" />
            </FormItemContainer>
            <FormItemContainer>
            <Button primary='true'>Send</Button>
            </FormItemContainer>
          </ContactsForm>
        </ContactsFormWrapper>
      </ContactsContainer>
    </ContactsSection>
  );
};

export default Contacts;
