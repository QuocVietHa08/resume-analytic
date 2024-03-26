export const DATA_LEARNING = `
The Asure Group Shark Tank program is an internal initiative to identify and support promising startup ideas from within the company. 
Employees are invited to pitch their innovative business concepts to a panel of executive judges, with the goal of securing funding and resources to turn their ideas into reality
This year's program will culminate in a live pitching event on 24 Octorber 2023.

ASURE GROUP SHARK TANK PROGRAM DETAILS AGENDA:

  1:00pm - 1:15pm Celebratory montage + Introduction by Marc + Nat to share what to expect
  
  1:15pm - 1:40pm Group A in the shark tank (15 Min presentation, 10 Min Q&A)
  
  1:45pm - 2:05pm Group B in the shark tank (15 Min presentation, 10 Min Q&A)
  
  2:10pm - 2:35pm Group C in the shark tank (15 Min presentation, 10 Min Q&A)
  
  2:40pm - 2:55pm Sharks discussion
  
  2:55pm - 3:15pm Shark tank result + Marc speech
  
  Sharks: Marc, Nic, Jon, Chien. There are 4 sharks in total.

SHARK TANK CONTENT STRATEGY
   
  Video:

    6 videos total (each ~3 mins)
      2 camera angles (presenters + screen, judges reactions)
      Show key points (problem, solution, features)
      Highlight big reaction moments
      Cut awkward silences

  Resources Required:

    2 Cameramen (Hui Yi + Valencia) to film in landscape mode:
      1.Angled towards Marc + Natalie (to capture reactions)
      2.Angled towards presenters + screen

    1 Video Editor (Cherry)
      1.Show only main key points (problem + solution + features)
      2.Show highlights that caused the "judges" to have a big reaction
      3.Cut out awkward silences

TOWNHALL CONTENT STRATEGY

  Photos:
    Total of 7 photos in sequence  
      Marc's sharing
      2 group shots (listening/clapping)
      3 product/business/sales sharing
      Vietnam team sharing
  
  Textual Content:
      1 LinkedIn post
      2.Achievements in last quarter
      3.Goals for next quarter & how to achieve
      4.Follow for more content
      5.Highlight: Townhall 
  `;

export const DEFAULT_DATA_PROMPT= `Human: I'm going to give you a document. Then I'm going to ask you a question about it. I'd like you to answer the question using facts from the data content. 

Here is my document:

<document>
${DATA_LEARNING}
</document>
`;
export const ANSWER_FORMAT = `First, find the data from the document that are most relevant to answering the question. Answer should be relatively short. If there are no relevant data, write "No data provide" instead. Then, answer the question. Do not include or reference data content verbatim in the answer. Don't say "According to data [1]" when answering. Make sure to follow the formatting and spacing exactly.`
export const FINAL_PRMOPT = `If the question cannot be answered by the document, say "I don't have data for this question. Please try another one".Answer the question immediately without preamble. 
Assistant:
`

export const BEGIN_PROMPT= `Human: I'm going to give you a document. Then I'm going to ask you a question about it. I'd like you to answer the question using facts from the data content. 
`





export const handleRenderInput = (input) => {
  return `
   ${DEFAULT_DATA_PROMPT} 
    ${ANSWER_FORMAT} Here is the question: Input bullet points and simple terms. ${input}
    ${FINAL_PRMOPT} 
  `
}
