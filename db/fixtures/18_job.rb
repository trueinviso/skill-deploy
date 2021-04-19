# types
full_time = JobType.find_by(name: "Full Time")
part_time = JobType.find_by(name: "Part Time")
contract = JobType.find_by(name: "Contract")

# roles
design = JobRole.find_by(name: "Design")
development = JobRole.find_by(name: "Development")
video = JobRole.find_by(name: "Video")

# experiences
entry = JobExperience.find_by(name: "Entry-level")
mid = JobExperience.find_by(name: "Mid-level")
senior = JobExperience.find_by(name: "Senior-level")
manager = JobExperience.find_by(name: "Manager and above")

# locations
remote = JobLocation.find_by(name: "Remote")
onsite = JobLocation.find_by(name: "Onsite")
onsite_or_remote = JobLocation.find_by(name: "Onsite or Remote")

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
    name: Forgery(:name).job_title,
    company_name: Forgery(:name).company_name,
    job_locations: [remote],
    job_roles: [design],
    job_types: [full_time],
    job_experiences: [entry, mid],
    tags: [ux, illustration],
    description: Forgery(:lorem_ipsum).paragraphs,
    company_website: Forgery(:internet).domain_name,
  },
  {
    id: 2,
    user_id: 1,
    name: Forgery(:name).job_title,
    company_name: Forgery(:name).company_name,
    job_locations: [remote],
    job_roles: [design],
    job_types: [full_time],
    job_experiences: [entry, senior],
    tags: [ux, graphic_design],
    description: Forgery(:lorem_ipsum).paragraphs,
    company_website: Forgery(:internet).domain_name,
  },
  {
    id: 3,
    user_id: 1,
    name: Forgery(:name).job_title,
    company_name: Forgery(:name).company_name,
    job_locations: [remote],
    job_roles: [design],
    job_types: [part_time],
    job_experiences: [entry, mid, senior, manager],
    tags: [web_design, illustration],
    description: Forgery(:lorem_ipsum).paragraphs,
    company_website: Forgery(:internet).domain_name,
  },
  {
    id: 4,
    user_id: 1,
    name: Forgery(:name).job_title,
    company_name: Forgery(:name).company_name,
    job_locations: [onsite_or_remote],
    job_roles: [design],
    job_types: [part_time],
    job_experiences: [entry, mid, senior, manager],
    tags: [management],
    description: Forgery(:lorem_ipsum).paragraphs,
    company_website: Forgery(:internet).domain_name,
  },
  {
    id: 5,
    user_id: 1,
    name: Forgery(:name).job_title,
    company_name: Forgery(:name).company_name,
    job_locations: [onsite],
    job_roles: [design],
    job_types: [contract],
    job_experiences: [senior, manager],
    tags: [product_design],
    description: Forgery(:lorem_ipsum).paragraphs,
    company_website: Forgery(:internet).domain_name,
  },
  # Development Jobs
  {
    id: 6,
    user_id: 1,
    name: Forgery(:name).job_title,
    company_name: Forgery(:name).company_name,
    job_locations: [onsite_or_remote],
    job_roles: [development],
    job_types: [full_time],
    job_experiences: [senior, manager],
    description: Forgery(:lorem_ipsum).paragraphs,
    company_website: Forgery(:internet).domain_name,
    tags: [mobile, front_end],
  },
  { id: 7,
    user_id: 1,
    job_roles: [development],
    name: Forgery(:name).job_title,
    company_name: Forgery(:name).company_name,
    job_locations: [remote],
    job_types: [full_time],
    job_experiences: [senior, manager, mid],
    tags: [mobile],
    description: Forgery(:lorem_ipsum).paragraphs,
    company_website: Forgery(:internet).domain_name,
  },
  {
    id: 8,
    user_id: 1,
    job_roles: [development],
    name: Forgery(:name).job_title,
    company_name: Forgery(:name).company_name,
    job_locations: [remote],
    job_types: [part_time],
    job_experiences: [senior, mid, entry],
    tags: [back_end, full_stack],
    description: Forgery(:lorem_ipsum).paragraphs,
    company_website: Forgery(:internet).domain_name,
  },
  {
    id: 9,
    user_id: 1,
    job_roles: [development],
    name: Forgery(:name).job_title,
    company_name: Forgery(:name).company_name,
    job_locations: [onsite_or_remote],
    job_types: [part_time],
    job_experiences: [senior, mid, entry],
    tags: [full_stack, front_end],
    description: Forgery(:lorem_ipsum).paragraphs,
    company_website: Forgery(:internet).domain_name,
  },
  {
    id: 10,
    user_id: 1,
    job_roles: [development],
    name: Forgery(:name).job_title,
    company_name: Forgery(:name).company_name,
    job_locations: [onsite],
    job_types: [contract],
    job_experiences: [senior, mid, entry, manager],
    tags: [dev_ops, management],
    description: Forgery(:lorem_ipsum).paragraphs,
    company_website: Forgery(:internet).domain_name,
  },
  # Video Jobs
  {
    id: 11,
    user_id: 1,
    name: Forgery(:name).job_title,
    company_name: Forgery(:name).company_name,
    job_locations: [remote],
    job_roles: [video],
    job_types: [full_time],
    job_experiences: [senior, manager],
    description: Forgery(:lorem_ipsum).paragraphs,
    company_website: Forgery(:internet).domain_name,
    tags: [digital_marketing, content],
  },
  {
    id: 12,
    user_id: 1,
    name: Forgery(:name).job_title,
    company_name: Forgery(:name).company_name,
    job_locations: [onsite],
    job_roles: [video],
    job_types: [full_time],
    job_experiences: [entry, mid],
    description: Forgery(:lorem_ipsum).paragraphs,
    company_website: Forgery(:internet).domain_name,
    tags: [content],
  },
  {
    id: 13,
    user_id: 1,
    name: Forgery(:name).job_title,
    company_name: Forgery(:name).company_name,
    job_locations: [remote],
    job_roles: [video],
    job_types: [part_time],
    job_experiences: [entry, mid],
    description: Forgery(:lorem_ipsum).paragraphs,
    company_website: Forgery(:internet).domain_name,
    tags: [digital_marketing, social_media],
  },
  {
    id: 14,
    user_id: 1,
    name: Forgery(:name).job_title,
    company_name: Forgery(:name).company_name,
    job_locations: [onsite_or_remote],
    job_roles: [video],
    job_types: [part_time, full_time],
    job_experiences: [entry, mid],
    description: Forgery(:lorem_ipsum).paragraphs,
    company_website: Forgery(:internet).domain_name,
    tags: [growth, social_media],
  },
  {
    id: 15,
    user_id: 1,
    name: Forgery(:name).job_title,
    company_name: Forgery(:name).company_name,
    job_locations: [onsite],
    job_roles: [video],
    job_types: [contract],
    job_experiences: [entry, mid, senior],
    description: Forgery(:lorem_ipsum).paragraphs,
    company_website: Forgery(:internet).domain_name,
    tags: [management],
  })
