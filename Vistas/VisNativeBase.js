import React from "react";
import {
  NativeBaseProvider,Box,Text,Button,VStack,Center,Checkbox,Switch,Slider,Accordion,Icon} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

const VisNativeBase = () => {
  const [values, setValues] = React.useState(["Eng"]);

  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <VStack space={4} alignItems="center" width="90%">
          <Box bg="primary.500" p="5" rounded="md">
            <Text color="white" fontSize="lg" bold>
              ¡Bienvenido a NativeBase!
            </Text>
          </Box>
          <Button
            onPress={() => alert("Botón presionado")}
            colorScheme="secondary"
          >
            Presiona aquí
          </Button>
          <Checkbox.Group
            value={values}
            onChange={(newValues) => setValues(newValues)}
          >
            <VStack space={4}>
              <Checkbox value="Eng">Check1</Checkbox>
              <Checkbox value="invision">Check2</Checkbox>
              <Checkbox value="adobe">Check3</Checkbox>
            </VStack>
          </Checkbox.Group>
          <Switch size="md" />
          <Box width="100%" mt={4}>
            <Slider defaultValue={50} minValue={0} maxValue={100}>
              <Slider.Track>
                <Slider.FilledTrack />
              </Slider.Track>
              <Slider.Thumb />
            </Slider>
          </Box>
          <Accordion>
            <Accordion.Item>
              <Accordion.Summary
                _expanded={{ backgroundColor: "primary.200" }}
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Text>How do I place an order?</Text>
                <Icon
                  as={MaterialIcons}
                  name="expand-more"
                  size="sm"
                  _expanded={{ name: "expand-less" }}
                />
              </Accordion.Summary>
              <Accordion.Details>
                <Text>
                  To place an order, simply select the products you want,
                  proceed to checkout, provide shipping and payment
                  information, and finalize your purchase.
                </Text>
              </Accordion.Details>
            </Accordion.Item>
            <Accordion.Item>
              <Accordion.Summary
                _expanded={{ backgroundColor: "primary.200" }}
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Text>What payment methods do you accept?</Text>
                <Icon
                  as={MaterialIcons}
                  name="expand-more"
                  size="sm"
                  _expanded={{ name: "expand-less" }}
                />
              </Accordion.Summary>
              <Accordion.Details>
                <Text>
                  We accept all major credit cards, including Visa, Mastercard,
                  and American Express. We also support payments through PayPal.
                </Text>
              </Accordion.Details>
            </Accordion.Item>
          </Accordion>
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
};

export default VisNativeBase;
