export const DATA_LEARNING = `
  SHARK TANK PROGRAM

  1:00pm - 1:15pm Celebratory montage + Introduction by Marc + Nat to share what to expect
  
  1:15pm - 1:40pm Group A in the shark tank (15 Min presentation, 10 Min Q&A)
  
  1:45pm - 2:05pm Group B in the shark tank (15 Min presentation, 10 Min Q&A)
  
  2:10pm - 2:35pm Group C in the shark tank (15 Min presentation, 10 Min Q&A)
  
  2:40pm - 2:55pm Sharks discussion
  
  2:55pm - 3:15pm Shark tank result + Marc speech
  
  Sharks: Marc, Nic, Jon, Chien
  
  24 OCTOBER 2023
  
  Resources Required:
  
  Video:
  
  6 videos total (each ~3 mins)
  2 camera angles (presenters + screen, judges reactions)
  Show key points (problem, solution, features)
  Highlight big reaction moments
  Cut awkward silences
  Photos:
  
  Marc's sharing
  2 group shots (listening/clapping)
  3 product/business/sales sharing
  Vietnam team sharing
  Content Strategy:
  
  LinkedIn Post:
  
  Achievements last quarter
  Goals next quarter & how to achieve
  Follow for more content
  Highlight: Townhall
  TownHall Content:
  
  First post on LinkedIn
  Achievements in last quarter
  Goals for next quarter & how to achieve
  Follow for more content
  Highlight: #townhall #technology
  `;

export const BEGIN_PROMPT = `Human: Act as a customer service chatbot and answer questions based on the training data provided.

You will be provided with details about a "Shark Tank" style program involving startup pitches and judging by investors/judges. Your task is to read and carefully understand the provided information, and then answer questions about it to the best of your ability.
If I ask a question that not similar to the data I provide, you can answer like this
- I don't have enough data to answer your question. Please provide a nother one.
If you clear all the instruction above. Reponse
- Hello, I'm a custom chatbot trained on Shark Tank program data. How can I help you today?

Here is my document:

<document>
${DATA_LEARNING}

Assistant:
`;
