# types
full_time = JobType.find_by(name: "Full Time")
part_time = JobType.find_by(name: "Part Time")
contract = JobType.find_by(name: "Freelance")

# roles
design = JobRole.find_by(name: "Design")
development = JobRole.find_by(name: "Development")
marketing = JobRole.find_by(name: "Marketing")

# TAGS
# design
graphic_design = Tag.find_by(name: "Graphic Design")
illustration = Tag.find_by(name: "Illustration")
ux = Tag.find_by(name: "UX/UI")
product_design = Tag.find_by(name: "Product Design")
web_design = Tag.find_by(name: "Web Design")
management = Tag.find_by(name: "Management")

# dev
mobile = Tag.find_by(name: "Mobile Development")
front_end = Tag.find_by(name: "Front End Development")
back_end = Tag.find_by(name: "Back End Development")
full_stack = Tag.find_by(name: "Full Stack Development")
dev_ops = Tag.find_by(name: "DevOps")

# marketing
digital_marketing = Tag.find_by(name: "Digital Marketing")
growth = Tag.find_by(name: "Growth")
social_media = Tag.find_by(name: "Social Media")
content = Tag.find_by(name: "Content")

Job.seed(:id,
# Design Jobs
  {
    id: 1,
    user_id: 1,
    name: Forgery("name").job_title,
    company_name: Forgery("name").company_name,
    location: Forgery("address").city,
    job_roles: [design],
    job_types: [full_time],
    tags: [ux, illustration],
  },
  {
    id: 2,
    user_id: 1,
    name: Forgery("name").job_title,
    company_name: Forgery("name").company_name,
    location: Forgery("address").city,
    job_roles: [design],
    job_types: [full_time],
    tags: [ux, graphic_design],
  },
  {
    id: 3,
    user_id: 1,
    name: Forgery("name").job_title,
    company_name: Forgery("name").company_name,
    location: Forgery("address").city,
    job_roles: [design],
    job_types: [part_time],
    tags: [web_design, illustration],
  },
  {
    id: 4,
    user_id: 1,
    name: Forgery("name").job_title,
    company_name: Forgery("name").company_name,
    location: Forgery("address").city,
    job_roles: [design],
    job_types: [part_time],
    tags: [management],
  },
  {
    id: 5,
    user_id: 1,
    name: Forgery("name").job_title,
    company_name: Forgery("name").company_name,
    location: Forgery("address").city,
    job_roles: [design],
    job_types: [contract],
    tags: [product_design],
  },
# Development Jobs
  {
    id: 6,
    user_id: 1,
    name: Forgery("name").job_title,
    company_name: Forgery("name").company_name,
    location: Forgery("address").city,
    job_roles: [development],
    job_types: [full_time],
    tags: [mobile, front_end],
  },
  { id: 7,
    user_id: 1,
    job_roles: [development],
    name: Forgery("name").job_title,
    company_name: Forgery("name").company_name,
    location: Forgery("address").city,
    job_types: [full_time],
    tags: [mobile],
  },
  {
    id: 8,
    user_id: 1,
    job_roles: [development],
    name: Forgery("name").job_title,
    company_name: Forgery("name").company_name,
    location: Forgery("address").city,
    job_types: [part_time],
    tags: [back_end, full_stack],
  },
  {
    id: 9,
    user_id: 1,
    job_roles: [development],
    name: Forgery("name").job_title,
    company_name: Forgery("name").company_name,
    location: Forgery("address").city,
    job_types: [part_time],
    tags: [full_stack,front_end],
  },
  {
    id: 10,
    user_id: 1,
    job_roles: [development],
    name: Forgery("name").job_title,
    company_name: Forgery("name").company_name,
    location: Forgery("address").city,
    job_types: [contract],
    tags: [dev_ops, management],
  },
# Marketing Jobs
  {
    id: 11,
    user_id: 1,
    name: Forgery("name").job_title,
    company_name: Forgery("name").company_name,
    location: Forgery("address").city,
    job_roles: [marketing],
    job_types: [full_time],
    tags: [digital_marketing, content],
  },
  {
    id: 12,
    user_id: 1,
    name: Forgery("name").job_title,
    company_name: Forgery("name").company_name,
    location: Forgery("address").city,
    job_roles: [marketing],
    job_types: [full_time],
    tags: [content],
  },
  {
    id: 13,
    user_id: 1,
    name: Forgery("name").job_title,
    company_name: Forgery("name").company_name,
    location: Forgery("address").city,
    job_roles: [marketing],
    job_types: [part_time],
    tags: [digital_marketing, social_media],
  },
  {
    id: 14,
    user_id: 1,
    name: Forgery("name").job_title,
    company_name: Forgery("name").company_name,
    location: Forgery("address").city,
    job_roles: [marketing],
    job_types: [part_time],
    tags: [growth, social_media],
  },
  {
    id: 15,
    user_id: 1,
    name: Forgery("name").job_title,
    company_name: Forgery("name").company_name,
    location: Forgery("address").city,
    job_roles: [marketing],
    job_types: [contract],
    tags: [management],
  },
)
