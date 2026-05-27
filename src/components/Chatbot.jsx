import { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, User, Bot } from 'lucide-react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hi there! 👋 I'm Vardhan's AI assistant. Feel free to ask me anything about his technical skills, educational milestones, projects, or how to get in touch!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const quickReplies = [
    { label: '🚀 View Projects', query: 'projects' },
    { label: '🎓 Education Details', query: 'education' },
    { label: '💡 Tech Skills', query: 'skills' },
    { label: '📞 Contact Info', query: 'contact' }
  ];

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend) => {
    if (!textToSend.trim()) return;

    // Add user message
    const newMsg = {
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, newMsg]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const responseText = generateBotResponse(textToSend.toLowerCase());
      const botMsg = {
        sender: 'bot',
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000);
  };

  const generateBotResponse = (query) => {
    if (query.includes('project') || query.includes('work') || query.includes('build')) {
      return "Vardhan has engineered some incredible projects! 🚀\n\n1. **Gemini AI Clone** (React.js, APIs): An interactive chatbot leveraging fetch pipelines for real-time model streaming.\n2. **YouTube Clone** (React.js, YouTube API, Context API): A fluid streaming visual indexer preserving playlist state.\n3. **RAG-based Document QA System** (Django, Python, FAISS): A semantic parser utilizing NLP and fast similarity searches.";
    }
    
    if (query.includes('education') || query.includes('college') || query.includes('degree') || query.includes('study')) {
      return "Vardhan holds an exceptional academic track record! 🎓\n\n• **MCA (2024–2026)** at Sree Venkateswara College of Engineering | CGPA: **9.02** (Pursuing)\n• **Bachelor of Computer Science (2021–2024)** at Krishna Chaitanya Degree College (VSU) | CGPA: **9.28**\n• **Intermediate (MPC, 2019-2021)** at GS Junior College | Grade: **98.4%**\n• **SSC (2018-2019)** at Ratnam High School | GPA: **10.0**";
    }
    
    if (query.includes('skill') || query.includes('stack') || query.includes('language') || query.includes('technology')) {
      return "Here is Vardhan's modern developer toolkit! 💡\n\n• **Frontend**: React.js, JavaScript (ES6+), HTML5, CSS3 Glassmorphism\n• **Backend**: REST APIs, Django, Node.js (basics), Express.js\n• **Databases**: MySQL, MongoDB\n• **Tooling**: Git, GitHub, Vite, VS Code, Python, Java, C";
    }
    
    if (query.includes('contact') || query.includes('phone') || query.includes('email') || query.includes('hire') || query.includes('gmail')) {
      return "You can get in touch with Vardhan instantly! 📞\n\n• **Gmail**: [vardhanbabuvendi@gmail.com](mailto:vardhanbabuvendi@gmail.com)\n• **Phone**: [+91 9100397713](tel:+919100397713)\n• **Location**: Buchireddypalem, SPSR Nellore, Andhra Pradesh\n\n*He is currently open to entry-level Frontend/Software Developer roles!*";
    }
    
    if (query.includes('hello') || query.includes('hi') || query.includes('hey')) {
      return "Hello there! 😊 How can I help you explore Vardhan's portfolio today? Choose a button below or type a query like 'skills' or 'projects'!";
    }

    if (query.includes('why') || query.includes('hire') || query.includes('strength')) {
      return "Why hire Vardhan? ✨\n\n1. **Advanced Academics**: Holds a near-perfect 10.0 GPA in SSC, 9.28 CGPA in BSc, and 9.02 in MCA.\n2. **React Expertise**: Proven capability building scalable systems (like his YouTube and Gemini clones).\n3. **Quick Adaptability**: Quickly learns new paradigms (evident in his RAG System using FAISS & SentenceTransformers).\n4. **Clean Code Focus**: Focuses on structuring reusable, well-commented, and scalable modular files.";
    }

    return "I'm not quite sure about that query, but I'm constantly learning! 🧠 Try clicking one of the quick replies below or ask me about his 'projects', 'education', 'skills', or 'contact' details.";
  };

  return (
    <div className="chatbot-wrapper no-print">
      {/* Floating Chat Trigger Circle */}
      {!isOpen && (
        <button 
          className="chatbot-trigger float-slow-node" 
          onClick={() => setIsOpen(true)}
          aria-label="Open AI Assistant Chat"
        >
          <MessageSquare size={24} />
          <span className="trigger-pulse" />
        </button>
      )}

      {/* Floating Chat Panel */}
      {isOpen && (
        <div className="glass-card chatbot-panel">
          {/* Header */}
          <div className="chat-header">
            <div className="bot-info">
              <div className="bot-avatar">
                <Bot size={18} />
                <span className="online-dot" />
              </div>
              <div className="bot-title-text">
                <span className="bot-name">Vardhan's Assistant</span>
                <span className="bot-status">Online AI Agent</span>
              </div>
            </div>
            <button className="chat-close-btn" onClick={() => setIsOpen(false)} aria-label="Close Chat">
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="chat-messages-container">
            {messages.map((msg, index) => (
              <div key={index} className={`message-bubble-row ${msg.sender}`}>
                <div className="bubble-avatar">
                  {msg.sender === 'bot' ? <Bot size={14} /> : <User size={14} />}
                </div>
                <div className="message-content-wrapper">
                  <div className="message-text">
                    {msg.text.split('\n').map((line, lineIdx) => {
                      // Bold formatting **text**
                      const boldRegex = /\*\*(.*?)\*\*/g;
                      const parts = [];
                      let lastIdx = 0;
                      let match;
                      
                      while ((match = boldRegex.exec(line)) !== null) {
                        if (match.index > lastIdx) {
                          parts.push(line.substring(lastIdx, match.index));
                        }
                        parts.push(<strong key={match.index}>{match[1]}</strong>);
                        lastIdx = boldRegex.lastIndex;
                      }
                      if (lastIdx < line.length) {
                        parts.push(line.substring(lastIdx));
                      }
                      
                      return (
                        <p key={lineIdx} style={{ marginBottom: line.trim() === '' ? '0.5rem' : '0.2rem' }}>
                          {parts.length > 0 ? parts : line}
                        </p>
                      );
                    })}
                  </div>
                  <span className="message-time">{msg.timestamp}</span>
                </div>
              </div>
            ))}

            {/* Typing Loader Indicator Bubble */}
            {isTyping && (
              <div className="message-bubble-row bot">
                <div className="bubble-avatar">
                  <Bot size={14} />
                </div>
                <div className="message-content-wrapper">
                  <div className="message-text typing-indicator-bubble">
                    <span className="typing-dot dot-1" />
                    <span className="typing-dot dot-2" />
                    <span className="typing-dot dot-3" />
                  </div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Quick Replies Panel */}
          <div className="chat-quick-replies">
            {quickReplies.map((reply, idx) => (
              <button 
                key={idx} 
                className="quick-reply-pill"
                onClick={() => handleSendMessage(reply.query)}
              >
                {reply.label}
              </button>
            ))}
          </div>

          {/* Text Input Panel */}
          <div className="chat-input-panel">
            <input
              type="text"
              placeholder="Ask about skills, education, projects..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(inputText)}
              className="chat-text-input"
            />
            <button 
              className="chat-send-btn" 
              onClick={() => handleSendMessage(inputText)}
              aria-label="Send Message"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
