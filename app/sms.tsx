import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function SMSSimulation() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Phone Frame */}
        <View style={styles.phoneFrame}>
          <View style={styles.phoneScreen}>
            {/* Status Bar */}
            <View style={styles.statusBar}>
              <Text style={styles.time}>9:41</Text>
              <View style={styles.statusIcons}>
                <Ionicons name="wifi" size={12} color="#000" />
                <Text style={styles.signal}>●●●</Text>
                <Ionicons name="battery-full" size={12} color="#000" />
                <Text style={styles.battery}>100%</Text>
              </View>
            </View>

            {/* Messages Header */}
            <View style={styles.messagesHeader}>
              <Text style={styles.messagesTitle}>Messages</Text>
            </View>

            {/* Message Thread */}
            <View style={styles.messageThread}>
              <View style={styles.messageContainer}>
                <View style={styles.avatar}>
                  <Ionicons name="phone-portrait" size={16} color="#666" />
                </View>
                <View style={styles.messageContent}>
                  <View style={styles.messageHeader}>
                    <Text style={styles.senderName}>PSB-Alert</Text>
                    <Text style={styles.phoneNumber}>+91-9876543210</Text>
                  </View>
                  <View style={styles.messageBubble}>
                    <Text style={styles.messageText}>
                      [PSB-Alert]: Dear Customer, we have temporarily locked your account due to unusual login attempts.
                      {'\n\n'}
                      Verify immediately at: <Text style={styles.link}>http://psbverify-alerts.online</Text>
                      {'\n\n'}
                      - Punjab & Sind Bank Security Team
                    </Text>
                  </View>
                  <View style={styles.messageTime}>
                    <Ionicons name="time" size={12} color="#999" />
                    <Text style={styles.timeText}>2 minutes ago</Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Educational Overlay */}
            <View style={styles.educationalOverlay}>
              <View style={styles.simulationBadge}>
                <Text style={styles.simulationText}>⚠️ SIMULATION</Text>
              </View>
              <Text style={styles.overlayDescription}>
                This is a fake SMS designed to demonstrate phishing tactics.
              </Text>
              
              {!showDetails && (
                <TouchableOpacity 
                  style={styles.detailsButton}
                  onPress={() => setShowDetails(true)}
                >
                  <Text style={styles.detailsButtonText}>What makes this suspicious?</Text>
                </TouchableOpacity>
              )}

              {showDetails && (
                <View style={styles.redFlagsCard}>
                  <Text style={styles.redFlagsTitle}>🚩 Red flags:</Text>
                  <View style={styles.redFlagsList}>
                    <Text style={styles.redFlagItem}>• Suspicious URL (not official PSB domain)</Text>
                    <Text style={styles.redFlagItem}>• Creates urgency and panic</Text>
                    <Text style={styles.redFlagItem}>• Asks to "verify details" via link</Text>
                    <Text style={styles.redFlagItem}>• Generic greeting "Dear Customer"</Text>
                  </View>
                </View>
              )}

              <TouchableOpacity 
                style={styles.continueButton}
                onPress={() => router.push('/phishing')}
              >
                <Text style={styles.continueButtonText}>
                  Click the Suspicious Link (Safe Simulation)
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e293b',
  },
  scrollContent: {
    padding: 16,
    alignItems: 'center',
  },
  phoneFrame: {
    backgroundColor: '#000',
    borderRadius: 32,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  phoneScreen: {
    backgroundColor: '#fff',
    borderRadius: 24,
    height: 600,
    width: 300,
    overflow: 'hidden',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#f8f9fa',
  },
  time: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000',
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  signal: {
    fontSize: 10,
    color: '#000',
  },
  battery: {
    fontSize: 10,
    color: '#000',
  },
  messagesHeader: {
    backgroundColor: '#3b82f6',
    padding: 16,
  },
  messagesTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  messageThread: {
    padding: 16,
    flex: 1,
  },
  messageContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  avatar: {
    width: 32,
    height: 32,
    backgroundColor: '#e5e7eb',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageContent: {
    flex: 1,
  },
  messageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4,
  },
  senderName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  phoneNumber: {
    fontSize: 12,
    color: '#6b7280',
  },
  messageBubble: {
    backgroundColor: '#f3f4f6',
    borderRadius: 12,
    padding: 12,
    maxWidth: 240,
  },
  messageText: {
    fontSize: 14,
    color: '#000',
    lineHeight: 20,
  },
  link: {
    color: '#3b82f6',
    textDecorationLine: 'underline',
  },
  messageTime: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 4,
  },
  timeText: {
    fontSize: 12,
    color: '#9ca3af',
  },
  educationalOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    padding: 16,
  },
  simulationBadge: {
    backgroundColor: '#ef4444',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  simulationText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  overlayDescription: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 12,
  },
  detailsButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  detailsButtonText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#374151',
  },
  redFlagsCard: {
    backgroundColor: '#f9fafb',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  redFlagsTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },
  redFlagsList: {
    gap: 4,
  },
  redFlagItem: {
    fontSize: 11,
    color: '#374151',
  },
  continueButton: {
    backgroundColor: '#ef4444',
    borderRadius: 8,
    padding: 12,
  },
  continueButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
  },
});