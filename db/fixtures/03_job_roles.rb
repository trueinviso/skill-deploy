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




JobRole.seed(:id,
  {
    id: 1,
    name: "Design",
    tags: [
      graphic_design,
      illustration,
      ux,
      product_design,
      web_design,
      management,
    ],
  },
  {
    id: 2,
    name: "Development",
    tags: [
      mobile,
      front_end,
      back_end,
      full_stack,
      dev_ops,
      management,
    ],
  },
  {
    id: 3,
    name: "Marketing" ,
    tags: [
      digital_marketing,
      growth,
      social_media,
      content,
      management,
    ]
  },
)