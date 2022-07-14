import React, { useEffect, useState } from "react";
import { ContainerSector, Sector, FooterButtonSector } from "./styles";
import { Text } from "react-native";
import { SectionCard } from "@components/Controllers/SectionCard";
import { useNavigation } from "@react-navigation/native";
import { FooterButton } from "@components/Controllers/FooterButton";
import { Button } from "@components/Controllers/Button";
import { SubTitle, Title } from "@components/Layout/Header/styles";

export function UserSector({ route }: any) {
  const data = route?.params;
  const { navigate } = useNavigation();
  const [sector, setSector] = useState<Array<string>>([]);
  const [selected, setSelected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // console.log("sector", sector);
  }, [sector]);

  const handleSelect = (item: string) => {
    // setIsLoading(true);
    setTimeout(() => {
      if (sector.includes(item)) {
        console.log("remove", item, "sector", sector);
        console.log("sector", sector);
        setSector(sector.filter((item) => item !== item));
        return;
      } else {
        console.log("add", item, "sector", sector);
        setSector([...sector, item]);
        return;
      }
      // setSelected(!selected);
      // setIsLoading(false);
    }, 300);
    // return;
  };

  return (
    <ContainerSector>
      <Title>ComunicaAí</Title>
      <SubTitle>Selecione o ministerio que você serve</SubTitle>

      <Sector>
        {[
          {
            title: "Datashow",
            backgroundColor: sector.includes("Datashow")
              ? "BACKGROUND"
              : "PRIMARY",
            borderColor: sector.includes("Datashow") ? "SECONDARY" : null,
            // isLoading: isLoading,
            iconName: "videocamera",
            iconSize: 50,
            iconColor: sector.includes("Datashow") ? "SECONDARY" : "BACKGROUND",
            onPress: () => handleSelect("Datashow"),
            textColor: sector.includes("Datashow") ? "SECONDARY" : "BACKGROUND",
          },
          {
            title: "Comunicação",
            backgroundColor: sector.includes("Comunicação")
              ? "BACKGROUND"
              : "PRIMARY",
            borderColor: sector.includes("Comunicação") ? "SECONDARY" : null,
            // isLoading: isLoading,
            iconName: "notification",
            iconSize: 52,
            iconColor: sector.includes("Comunicação")
              ? "SECONDARY"
              : "BACKGROUND",
            onPress: () => handleSelect("Comunicação"),
            textColor: sector.includes("Comunicação")
              ? "SECONDARY"
              : "BACKGROUND",
          },
          {
            title: "Atalaia",
            backgroundColor: sector.includes("Atalaia")
              ? "BACKGROUND"
              : "PRIMARY",
            borderColor: sector.includes("Atalaia") ? "SECONDARY" : null,
            // isLoading: isLoading,
            iconName: "Safety",
            iconSize: 52,
            iconColor: sector.includes("Atalaia") ? "SECONDARY" : "BACKGROUND",
            onPress: () => handleSelect("Atalaia"),
            textColor: sector.includes("Atalaia") ? "SECONDARY" : "BACKGROUND",
          },
          {
            title: "BolaCare/Brigada",
            backgroundColor: sector.includes("BolaCare/Brigada")
              ? "BACKGROUND"
              : "PRIMARY",
            borderColor: sector.includes("BolaCare/Brigada")
              ? "SECONDARY"
              : null,
            // isLoading: isLoading,
            iconName: "medicinebox",
            iconSize: 52,
            iconColor: sector.includes("BolaCare/Brigada")
              ? "SECONDARY"
              : "BACKGROUND",
            onPress: () => handleSelect("BolaCare/Brigada"),
            textColor: sector.includes("BolaCare/Brigada")
              ? "SECONDARY"
              : "BACKGROUND",
          },
        ].map((item) => (
          <SectionCard
            key={item.title}
            width="140px"
            height="140px"
            margin={10}
            title={item.title}
            backgroundColor={item.backgroundColor}
            borderColor={item.borderColor}
            isLoading
            iconName={item.iconName}
            iconSize={item.iconSize}
            iconColor={item.iconColor}
            onPress={item.onPress}
            textColor={item.textColor}
          />
        ))}
      </Sector>

      <FooterButtonSector>
        <Button
          title="CONTINUAR"
          onPress={() => {
            alert("cloc");
          }}
        />
      </FooterButtonSector>
    </ContainerSector>
  );
}
