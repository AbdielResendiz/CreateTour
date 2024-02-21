import React, { useState } from "react";
import { Menu, Pressable, Text, HamburgerIcon, VStack, HStack, Divider } from "native-base";
import { useNavigate } from "react-router-dom";
import { animateScroll as scroll } from 'react-scroll';
import { useTranslation } from 'react-i18next';

const MenuHamburger = () => {
    const navigate = useNavigate();
    const handleClickMenu = (vista) => {
        scroll.scrollToTop();
        navigate(vista)
    };
    const { t } = useTranslation("global");

    const [menuViaje, setMenuViaje] = useState(false);
    const [menuNosotros, setMenuNosotros] = useState(false);

    return (

        <Menu borderWidth={1} zIndex={9999} shadow={6} right={3} borderColor="muted.400"
            display={{ base: "flex", lg: "none" }}
            trigger={(triggerProps) => {
                return <Pressable display={{ base: "block", lg: "none" }} bg={"#449bab"}
                    alignSelf={"center"} justifyContent="center" p={2} borderRadius={10}
                    accessibilityLabel="More options menu" {...triggerProps}
                    alignItems="center" shadow={3}>
                    <HamburgerIcon color={"#fff"} size={5} />
                </Pressable>
            }}
        >

            <Menu.Item onPress={() => handleClickMenu('/')}>
                <Text fontFamily="Avenir" fontSize={"sm"}>
                    {t("menu.inicio")}
                </Text>
            </Menu.Item>
            <Menu.Item onPress={() => handleClickMenu('/Tours')}>
                <Text fontFamily="Avenir" fontSize={"sm"}>
                    Tours
                </Text>
            </Menu.Item>

            <Menu.Item onPress={() => handleClickMenu('/Blog')}>
                <Text fontFamily="Avenir" fontSize={"sm"}>
                    Blog
                </Text>
            </Menu.Item>

            <Menu.Item onPress={() => handleClickMenu('/Contacto')}>
                <Text fontFamily="Avenir" fontSize={"sm"}>
                    {t("menu.Contacto")}
                </Text>
            </Menu.Item>

            <Menu.Item onPress={() => handleClickMenu('/FAQ')}>
                <Text fontFamily="Avenir" fontSize={"sm"}>
                    FAQ
                </Text>
            </Menu.Item>








        </Menu >
    );

}
export default MenuHamburger;