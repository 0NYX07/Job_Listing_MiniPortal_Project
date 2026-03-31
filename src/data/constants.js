export const ROLES = [
    "Frontend Developer", "Backend Engineer", "Full Stack Developer",
    "UI/UX Designer", "Data Analyst", "DevOps Engineer", "ML Engineer",
    "Android Developer", "iOS Developer", "QA Engineer", "Product Manager",
    "Cloud Architect", "Cybersecurity Analyst", "React Developer",
    "Node.js Developer", "Python Developer", "Java Engineer",
    "Scrum Master", "Data Engineer", "Technical Writer",
]

export const COMPANIES = [
    "Infosys", "TCS", "Wipro", "Google India", "Microsoft", "Amazon",
    "Flipkart", "Swiggy", "Zomato", "Razorpay", "Freshworks", "PhonePe",
    "Meesho", "CRED", "Ola", "Paytm", "Byju's", "Zerodha", "Atlassian", "Adobe India",
]

export const LOCATIONS = [
    "Bengaluru", "Hyderabad", "Pune", "Mumbai", "Chennai",
    "Noida", "Remote", "Gurgaon", "Kolkata", "Ahmedabad",
]

export const TYPES = ["Full-time", "Internship", "Contract", "Part-time"]

export const EXP = ["Fresher", "0–1 yrs", "1–3 yrs", "3–5 yrs", "5+ yrs"]

export const TAGS = [
    ["React", "JavaScript", "CSS"],
    ["Node.js", "Express", "MongoDB"],
    ["Python", "Django", "REST API"],
    ["Java", "Spring Boot", "SQL"],
    ["AWS", "Docker", "Kubernetes"],
    ["Figma", "Prototyping", "Research"],
    ["TypeScript", "Next.js", "GraphQL"],
    ["Flutter", "Dart", "Firebase"],
    ["Swift", "Xcode", "CoreData"],
    ["Selenium", "Jest", "Cypress"],
]

export const PAGE_SIZE = 10

export function mapPostsToJobs(posts) {
    return posts.map((post, i) => ({
        id: post.id,
        role: ROLES[i % ROLES.length],
        company: COMPANIES[i % COMPANIES.length],
        location: LOCATIONS[i % LOCATIONS.length],
        type: TYPES[i % TYPES.length],
        experience: EXP[i % EXP.length],
        tags: TAGS[i % TAGS.length],
        description: post.body.replace(/\n/g, " ").slice(0, 120) + "...",
        postedDaysAgo: (i % 14) + 1,
    }))
}