import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const tips = [
  {
    icon: 'globe-outline',
    title: "Check the URL Carefully",
    description: "Always verify the website URL. Banks use specific domains like sbi.co.in, not variations like secure-sbi-alert.in",
    example: "✅ https://onlinesbi.sbi.co.in vs ❌ https://secure-sbi-alert.in"
  },
  {
    icon: 'call-outline',
    title: "Banks Never Ask for Sensitive Info",
    description: "Legitimate banks will NEVER ask for passwords, OTPs, or account details via SMS, email, or phone calls",
    example: "If in doubt, call your bank's official customer service number directly"
  },
  {
    icon: 'eye-outline',
    title: "Look for Security Indicators",
    description: "Check for SSL certificates (https://), proper spelling, and official branding before entering any information",
    example: "Look for the padlock icon in your browser's address bar"
  },
  {
    icon: 'warning-outline',
    title: "Beware of Urgency Tactics",
    description: "Scammers create false urgency. Take time to verify suspicious messages instead of acting immediately",
    example: "Phrases like 'verify immediately' or 'account will be blocked' are red flags"
  }
];

const preventionSteps = [
  "Enable SMS alerts for all transactions",
  "Use official banking apps only",
  "Never click links in suspicious messages",
  "Keep your banking apps updated",
  "Use strong, unique passwords",
  "Enable two-factor authentication where available"
];

export default function SecurityTips() {
  const handleReportCrime = () => {
    Linking.openURL('https://cybercrime.gov.in/');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <View style={styles.iconContainer}>
            <Ionicons name="shield-checkmark" size={32} color="#fff" />
          </View>
          <Text style={styles.title}>🛡️ How to Stay Protected</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Your Security Toolkit</Text>
          </View>
        </View>

        <View style={styles.tipsGrid}>
          {tips.map((tip, index) => (
            <View key={index} style={styles.tipCard}>
              <View style={styles.tipHeader}>
                <View style={styles.tipIcon}>
                  <Ionicons name={tip.icon as any} size={24} color="#3b82f6" />
                </View>
                <Text style={styles.tipTitle}>{tip.title}</Text>
              </View>
              <Text style={styles.tipDescription}>{tip.description}</Text>
              <View style={styles.tipExample}>
                <Text style={styles.tipExampleText}>{tip.example}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.checklistCard}>
          <View style={styles.checklistHeader}>
            <Ionicons name="checkmark-circle" size={20} color="#10b981" />
            <Text style={styles.checklistTitle}>Prevention Checklist</Text>
          </View>
          <Text style={styles.checklistSubtitle}>Follow these steps to protect yourself</Text>
          <View style={styles.checklistGrid}>
            {preventionSteps.map((step, index) => (
              <View key={index} style={styles.checklistItem}>
                <Ionicons name="checkmark-circle" size={16} color="#10b981" />
                <Text style={styles.checklistItemText}>{step}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.reminderCard}>
          <Text style={styles.reminderTitle}>Remember: You Are the First Line of Defense</Text>
          <Text style={styles.reminderText}>
            Technology can help, but your awareness and caution are the most important factors in staying safe online. 
            When in doubt, always:
          </Text>
          <View style={styles.reminderSteps}>
            <Text style={styles.reminderStep}>🛑 <Text style={styles.bold}>Stop</Text> - Don't act on impulse</Text>
            <Text style={styles.reminderStep}>🤔 <Text style={styles.bold}>Think</Text> - Is this request legitimate?</Text>
            <Text style={styles.reminderStep}>📞 <Text style={styles.bold}>Verify</Text> - Contact your bank directly using official numbers</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.congratsText}>
            🎓 Congratulations! You've completed the security awareness simulation.
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={styles.primaryButton}
              onPress={() => router.push('/')}
            >
              <Text style={styles.primaryButtonText}>Restart Simulation</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.secondaryButton}
              onPress={handleReportCrime}
            >
              <Text style={styles.secondaryButtonText}>Report Real Cybercrime</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  scrollContent: {
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  iconContainer: {
    width: 64,
    height: 64,
    backgroundColor: '#10b981',
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1e293b',
    textAlign: 'center',
    marginBottom: 16,
  },
  badge: {
    backgroundColor: '#10b981',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  badgeText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  tipsGrid: {
    gap: 16,
    marginBottom: 32,
  },
  tipCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  tipHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  tipIcon: {
    backgroundColor: '#dbeafe',
    borderRadius: 8,
    padding: 8,
    marginRight: 12,
  },
  tipTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    flex: 1,
  },
  tipDescription: {
    fontSize: 16,
    color: '#64748b',
    marginBottom: 12,
    lineHeight: 24,
  },
  tipExample: {
    backgroundColor: '#f1f5f9',
    borderRadius: 8,
    padding: 12,
  },
  tipExampleText: {
    fontSize: 14,
    fontFamily: 'monospace',
    color: '#000',
  },
  checklistCard: {
    backgroundColor: '#f0fdf4',
    borderWidth: 1,
    borderColor: '#bbf7d0',
    borderRadius: 12,
    padding: 24,
    marginBottom: 32,
  },
  checklistHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  checklistTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#10b981',
    marginLeft: 8,
  },
  checklistSubtitle: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 16,
  },
  checklistGrid: {
    gap: 12,
  },
  checklistItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checklistItemText: {
    fontSize: 14,
    color: '#000',
    marginLeft: 12,
    flex: 1,
  },
  reminderCard: {
    backgroundColor: '#dbeafe',
    borderWidth: 1,
    borderColor: '#93c5fd',
    borderRadius: 12,
    padding: 24,
    marginBottom: 32,
  },
  reminderTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3b82f6',
    marginBottom: 16,
  },
  reminderText: {
    fontSize: 16,
    color: '#000',
    marginBottom: 16,
    lineHeight: 24,
  },
  reminderSteps: {
    gap: 8,
  },
  reminderStep: {
    fontSize: 16,
    color: '#000',
  },
  bold: {
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'center',
    gap: 16,
  },
  congratsText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#3b82f6',
    textAlign: 'center',
  },
  buttonContainer: {
    gap: 16,
    width: '100%',
  },
  primaryButton: {
    backgroundColor: '#3b82f6',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#3b82f6',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#3b82f6',
    fontSize: 18,
    fontWeight: 'bold',
  },
});