export const DATA_LEARNING = '';
export const DEFAULT_DATA_PROMPT= '';
export const ANSWER_FORMAT = 'Base on the resume data. You need to provide a clear shot about the level of the programmer. The resume is good or bad, and why?. What can improve and measure the salary according to the resume'
export const FINAL_PRMOPT = ''
export const BEGIN_PROMPT= 'Human: Act as a senior programmer who really good at interview other programer. I will give you a resume and you need to analyze that resume:'

export const PROMPT_GET_SALARAY = `Human: Act as a senior programmer who really good at interview other programer. I will give you a resume and you need to analyze that resume.
Just return the salary of the resume.
Don't return any other information. Don't return the salary in a sentence. Just return the number.
For example: 1000. Here is the information of the resume:`

export const PROMPT_GET_KEY_FACTOR = `Human: Act as a senior programmer who really good at interview other programer. I will give you a resume and you need to analyze that resume.
Then return 5 key factors of this resume.
Return in buttlet point.
Here is the information of the resume:`

export const PROMPT_GET_IMPROVEMENT = `Human: Act as a senior programmer who really good at interview other programer. I will give you a resume and you need to analyze that resume.
Then return 5 key improvement of this resume.
Return in buttlet point.
Here is the information of the resume:`

export const PROMPT_ANALYZE_RESUME = `Human: Act as a senior programmer who really good at interview other programer. I will give you a resume and you need to analyze that resume.
Then return 3 key improvement and 3 key feature and estimate salary of this resume.
Return in buttlet point, each point in one line with about 10 words each line.
Here is the information of the resume:`