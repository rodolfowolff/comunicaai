import React, { useCallback, useMemo, useRef, useState } from "react";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { AntDesign } from "@expo/vector-icons";

import {
  Background,
  ContentContainer,
  HeaderBottomSheet,
  Title,
} from "./styles";
import { Button } from "@components/Controllers/Button";
import { OrderForm } from "@components/Forms/OrderForm";
import { TouchableOpacity } from "react-native-gesture-handler";

export function NewOrder() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [bottomSheetOpened, setBottomSheetOpen] = useState(false);

  const snapPoints = useMemo(() => ["63%", "80%"], []);

  const handleSheetChanges = useCallback((index: number) => {
    if (index < 0) {
      bottomSheetRef?.current?.close();
      setBottomSheetOpen(false);
    }
  }, []);

  return (
    <>
      <Button
        title="NOVO CHAMADO"
        onPress={() => {
          setBottomSheetOpen(!bottomSheetOpened);
          bottomSheetRef.current?.expand();
        }}
      />

      {bottomSheetOpened && (
        <BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          backdropComponent={() => <Background />}
          onChange={handleSheetChanges}
          enablePanDownToClose={true}
        >
          <BottomSheetScrollView>
            <ContentContainer>
              <HeaderBottomSheet>
                <Title>Novo chamado</Title>
                <TouchableOpacity
                  onPress={() => {
                    bottomSheetRef?.current?.close();
                    setBottomSheetOpen(false);
                  }}
                >
                  <AntDesign name="closesquare" size={25} color="black" />
                </TouchableOpacity>
              </HeaderBottomSheet>

              <OrderForm />
            </ContentContainer>
          </BottomSheetScrollView>
        </BottomSheet>
      )}
    </>
  );
}
