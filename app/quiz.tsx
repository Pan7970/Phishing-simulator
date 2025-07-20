import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const questions = [
  {
    question: "You receive an SMS: 'Your account will be blocked in 2 hours. Click here to verify: bit.ly/bank123'. What should you do?",
    options: [
      "Click the link immediately to save my account",
      "Call my bank's official customer service number",
      "Forward the message to friends for advice",
      "Reply to the SMS asking for more details"
    ],
    correct: 1,
    explanation: "Always verify suspicious messages through official channels. Banks never send urgent links via SMS."
  },
  {
    question: "Which of these URLs is likely legitimate for State Bank of India?",
    options: [
      "https://secure-sbi-verify.com",
      "https://onlinesbi.sbi.co.in",
      "https://sbi-banking-secure.org",
      "https://sbibank-official.net"
    ],
    correct: 1,
    explanation: "Official SBI domain is sbi.co.in. Be wary of variations or different domains."
  },
  {
    question: "A caller says they're from your bank and asks for your OTP to 'verify your identity'. You should:",
    options: [
      "Provide the OTP since they called me",
      "Ask them to wait while I call back on the official number",
      "Give them my account number instead",
      "Hang up immediately and never share OTPs over phone"
    ],
    correct: 3,
    explanation: "Never share OTPs with anyone over phone calls. Banks never ask for OTPs to verify your identity."
  },
  {
    question: "What's the biggest red flag in this email: 'Dear Customer, You have won ₹50,000! Click here to claim your prize before it expires in 24 hours!'",
    options: [
      "It's addressed to 'Dear Customer'",
      "The urgent 24-hour deadline",
      "Unexpected prize announcement",
      "All of the above"
    ],
    correct: 3,
    explanation: "All these elements are classic phishing tactics: generic greeting, false urgency, and unexpected rewards."
  },
  {
    question: "Your friend forwards a message: 'Government is giving ₹2000 to everyone. Register here with Aadhaar: gov-benefit.in'. What do you do?",
    options: [
      "Register immediately before the offer ends",
      "Check official government websites first",
      "Ask my friend where they got this information",
      "Both B and C"
    ],
    correct: 3,
    explanation: "Always verify such claims through official government websites and question the source of information."
  }
];

export default function QuizSimulation() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex.toString()];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate score
      const score = newAnswers.reduce((acc, answer, index) => {
        return acc + (parseInt(answer) === questions[index].correct ? 1 : 0);
      }, 0);
      setShowResult(true);
      setTimeout(() => router.push('/tips'), 3000);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 4) return '#10b981';
    if (score >= 3) return '#f59e0b';
    return '#ef4444';
  };

  const getScoreMessage = (score: number) => {
    if (score === 5) return "🎉 Excellent! You're well-protected against phishing!";
    if (score === 4) return "👍 Great job! Just a bit more awareness needed.";
    if (score === 3) return "⚠️ Good start, but please review the security tips.";
    return "🚨 High risk! Please take cybersecurity seriously.";
  };

  if (showResult) {
    const score = answers.reduce((acc, answer, index) => {
      return acc + (parseInt(answer) === questions[index].correct ? 1 : 0);
    }, 0);

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.resultContainer}>
          <View style={styles.resultCard}>
            <View style={styles.resultIcon}>
              <Ionicons name="target" size={32} color="#fff" />
            </View>
            
            <Text style={styles.resultTitle}>Quiz Complete!</Text>
            
            <View style={styles.scoreContainer}>
              <Text style={[styles.scoreText, { color: getScoreColor(score) }]}>
                {score}/5
              </Text>
              <Text style={styles.scoreMessage}>
                {getScoreMessage(score)}
              </Text>
            </View>

            <View style={styles.progressBar}>
              <View 
                style={[
                  styles.progressFill, 
                  { 
                    width: `${(score / 5) * 100}%`,
                    backgroundColor: getScoreColor(score)
                  }
                ]} 
              />
            </View>

            <Text style={styles.redirectText}>
              Redirecting to security tips in a moment...
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>Security Awareness Quiz</Text>
            </View>
            <Text style={styles.questionCounter}>
              Question {currentQuestion + 1} of {questions.length}
            </Text>
          </View>
          <View style={styles.progressBar}>
            <View 
              style={[
                styles.progressFill, 
                { width: `${((currentQuestion + 1) / questions.length) * 100}%` }
              ]} 
            />
          </View>
        </View>

        <View style={styles.questionCard}>
          <Text style={styles.questionText}>
            {questions[currentQuestion].question}
          </Text>
          
          <View style={styles.optionsContainer}>
            {questions[currentQuestion].options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.optionButton}
                onPress={() => handleAnswer(index)}
              >
                <Text style={styles.optionLetter}>
                  {String.fromCharCode(65 + index)}.
                </Text>
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Take your time and choose the safest option
          </Text>
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
    marginBottom: 24,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  badge: {
    backgroundColor: '#10b981',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  badgeText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  questionCounter: {
    fontSize: 14,
    color: '#6b7280',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#e5e7eb',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#3b82f6',
    borderRadius: 4,
  },
  questionCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 24,
  },
  questionText: {
    fontSize: 20,
    color: '#000',
    lineHeight: 28,
    marginBottom: 24,
  },
  optionsContainer: {
    gap: 12,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    padding: 16,
  },
  optionLetter: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginRight: 12,
    minWidth: 20,
  },
  optionText: {
    fontSize: 16,
    color: '#000',
    flex: 1,
    lineHeight: 22,
  },
  footer: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  resultCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 32,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  resultIcon: {
    width: 64,
    height: 64,
    backgroundColor: '#3b82f6',
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  resultTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 24,
  },
  scoreContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  scoreText: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  scoreMessage: {
    fontSize: 18,
    color: '#6b7280',
    textAlign: 'center',
  },
  redirectText: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
    marginTop: 16,
  },
});