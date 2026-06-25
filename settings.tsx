import React from "react";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { clearToken } from "../src/lib/auth";
import { Screen } from "../src/components/screen";
import { SectionCard } from "../src/components/section-card";
import { useTheme } from "../src/providers/theme-provider";
import type { ThemeMode } from "@hkscan/shared";

export default function SettingsScreen() {
  const { colors, mode, setMode } = useTheme();

  async function logout() {
    await clearToken();
    router.replace("/(auth)/sign-in");
  }

  return (
    <Screen>
      <SectionCard title="Appearance" subtitle="Switch between premium light and dark themes.">
        <View style={styles.row}>
          {(["system", "light", "dark"] as ThemeMode[]).map((item) => (
            <Pressable
              key={item}
              onPress={() => setMode(item)}
              style={[
                styles.themeChip,
                {
                  backgroundColor: mode === item ? colors.primary : colors.surfaceMuted
                }
              ]}
            >
              <Text style={{ color: mode === item ? "white" : colors.text, fontWeight: "700" }}>{item}</Text>
            </Pressable>
          ))}
        </View>
      </SectionCard>

      <SectionCard title="Sync and providers" subtitle="Cloud sync, auth providers, and memory backup status.">
        <Text style={{ color: colors.textMuted }}>Email login is active. Google and Apple providers are scaffolded in the backend for production integration.</Text>
      </SectionCard>

      <Pressable onPress={logout} style={[styles.logoutButton, { backgroundColor: colors.danger }]}>
        <Text style={styles.logoutText}>Sign out</Text>
      </Pressable>
    </Screen>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", gap: 10, flexWrap: "wrap" },
  themeChip: { borderRadius: 999, paddingHorizontal: 14, paddingVertical: 10 },
  logoutButton: { borderRadius: 16, alignItems: "center", paddingVertical: 14 },
  logoutText: { color: "white", fontWeight: "800" }
});
