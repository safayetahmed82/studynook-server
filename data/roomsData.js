const rooms = [
  {
    name: "Quiet Corner Pod",
    description:
      "A small, calm pod for one or two people who want to read, revise or write without any distractions around them.",
    image: "https://picsum.photos/seed/studynook1/600/400",
    floor: "Floor 1",
    capacity: 2,
    hourlyRate: 4,
    amenities: ["Wi-Fi", "Power Outlets", "Quiet Zone"],
    bookingCount: 12,
  },
  {
    name: "Group Study Hub",
    description:
      "A bright room with a big table and a whiteboard, perfect for group projects, presentations and exam revision together.",
    image: "https://picsum.photos/seed/studynook2/600/400",
    floor: "Floor 2",
    capacity: 6,
    hourlyRate: 8,
    amenities: [
      "Whiteboard",
      "Projector",
      "Wi-Fi",
      "Power Outlets",
      "Air Conditioning",
    ],
    bookingCount: 27,
  },
  {
    name: "Silent Reading Room",
    description:
      "A strict no-talking room with soft lighting and comfortable chairs, made for long and focused reading sessions.",
    image: "https://picsum.photos/seed/studynook3/600/400",
    floor: "Floor 3",
    capacity: 4,
    hourlyRate: 5,
    amenities: ["Quiet Zone", "Wi-Fi", "Air Conditioning"],
    bookingCount: 19,
  },
  {
    name: "Presentation Practice Room",
    description:
      "Rehearse your talk with a projector and a whiteboard in a private room where nobody will interrupt your practice.",
    image: "https://picsum.photos/seed/studynook4/600/400",
    floor: "Floor 2",
    capacity: 5,
    hourlyRate: 9,
    amenities: ["Projector", "Whiteboard", "Wi-Fi", "Power Outlets"],
    bookingCount: 15,
  },
  {
    name: "Window Light Studio",
    description:
      "A sunny room with large windows and a long desk, ideal for people who study best with plenty of natural light.",
    image: "https://picsum.photos/seed/studynook5/600/400",
    floor: "Floor 4",
    capacity: 3,
    hourlyRate: 6,
    amenities: ["Wi-Fi", "Power Outlets", "Air Conditioning"],
    bookingCount: 8,
  },
  {
    name: "Thesis Writing Den",
    description:
      "A private, quiet room with a spacious desk and plenty of sockets, built for long thesis and dissertation writing days.",
    image: "https://picsum.photos/seed/studynook6/600/400",
    floor: "Floor 3",
    capacity: 2,
    hourlyRate: 7,
    amenities: ["Quiet Zone", "Power Outlets", "Wi-Fi", "Whiteboard"],
    bookingCount: 22,
  },
  {
    name: "Collaboration Lounge",
    description:
      "A relaxed lounge-style room with sofas and a whiteboard wall, great for brainstorming ideas with your teammates.",
    image: "https://picsum.photos/seed/studynook7/600/400",
    floor: "Floor 1",
    capacity: 8,
    hourlyRate: 12,
    amenities: ["Whiteboard", "Wi-Fi", "Projector", "Air Conditioning"],
    bookingCount: 31,
  },
  {
    name: "Exam Prep Cabin",
    description:
      "A tidy cabin with a clock, a whiteboard and strong Wi-Fi, set up so you can run mock exams and practice papers.",
    image: "https://picsum.photos/seed/studynook8/600/400",
    floor: "Floor 2",
    capacity: 4,
    hourlyRate: 6,
    amenities: ["Whiteboard", "Quiet Zone", "Wi-Fi"],
    bookingCount: 17,
  },
  {
    name: "Solo Focus Booth",
    description:
      "A compact booth for one person, with a desk lamp and a power socket, perfect for short and focused study bursts.",
    image: "https://picsum.photos/seed/studynook9/600/400",
    floor: "Floor 1",
    capacity: 1,
    hourlyRate: 3,
    amenities: ["Power Outlets", "Quiet Zone"],
    bookingCount: 40,
  },
  {
    name: "Tech Project Room",
    description:
      "A room made for coding and design teams, with a projector, extra sockets and a long table for several laptops.",
    image: "https://picsum.photos/seed/studynook10/600/400",
    floor: "Floor 4",
    capacity: 6,
    hourlyRate: 10,
    amenities: [
      "Projector",
      "Power Outlets",
      "Wi-Fi",
      "Whiteboard",
      "Air Conditioning",
    ],
    bookingCount: 24,
  },
  {
    name: "Garden View Room",
    description:
      "A peaceful room that looks out over the library garden, giving you a calm view while you read, write or revise.",
    image: "https://picsum.photos/seed/studynook11/600/400",
    floor: "Floor 5",
    capacity: 3,
    hourlyRate: 5,
    amenities: ["Quiet Zone", "Wi-Fi", "Power Outlets"],
    bookingCount: 11,
  },
  {
    name: "Seminar Room Alpha",
    description:
      "The largest room in the library, with a projector, whiteboard and air conditioning for study circles and workshops.",
    image: "https://picsum.photos/seed/studynook12/600/400",
    floor: "Floor 5",
    capacity: 10,
    hourlyRate: 15,
    amenities: [
      "Projector",
      "Whiteboard",
      "Wi-Fi",
      "Power Outlets",
      "Air Conditioning",
      "Quiet Zone",
    ],
    bookingCount: 35,
  },
];

export default rooms;