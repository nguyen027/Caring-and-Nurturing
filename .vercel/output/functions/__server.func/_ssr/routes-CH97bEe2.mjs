import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { _ as Backpack, a as Phone, c as Linkedin, d as HandHeart, f as GraduationCap, g as BookOpen, h as Building2, i as Sparkles, l as Instagram, m as Calendar, n as X, o as Menu, p as Facebook, r as Users, s as Mail, t as Youtube, u as Heart, v as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CH97bEe2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var Card = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("rounded-xl border bg-card text-card-foreground shadow", className),
	...props
}));
Card.displayName = "Card";
var CardHeader = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("flex flex-col space-y-1.5 p-6", className),
	...props
}));
CardHeader.displayName = "CardHeader";
var CardTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("font-semibold leading-none tracking-tight", className),
	...props
}));
CardTitle.displayName = "CardTitle";
var CardDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
CardDescription.displayName = "CardDescription";
var CardContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("p-6 pt-0", className),
	...props
}));
CardContent.displayName = "CardContent";
var CardFooter = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("flex items-center p-6 pt-0", className),
	...props
}));
CardFooter.displayName = "CardFooter";
var hero_students_default = "/assets/hero-students-BZlVXFNc.jpg";
var story_1_default = "/assets/story-1-CJEcJGu3.jpg";
var story_2_default = "/assets/story-2-DapU1cvY.jpg";
var story_3_default = "/assets/story-3-Dv5uJl5d.jpg";
var event_college_default = "/assets/event-college-DHEO7d8V.jpg";
var event_supplies_default = "/assets/event-supplies-CMafL8v2.jpg";
var event_mentor_default = "/assets/event-mentor-DfAcRwye.jpg";
var navLinks = [
	{
		label: "Mission",
		href: "#mission"
	},
	{
		label: "Programs",
		href: "#programs"
	},
	{
		label: "Impact",
		href: "#impact"
	},
	{
		label: "Events",
		href: "#events"
	},
	{
		label: "Get Involved",
		href: "#involved"
	},
	{
		label: "Contact",
		href: "#contact"
	}
];
var programs = [
	{
		icon: Backpack,
		emoji: "🎒",
		title: "School Supply Drives",
		desc: "Providing book bags filled with essential school supplies for students in need.",
		tint: "from-pink-50 to-pink-100",
		accent: "bg-brand-pink"
	},
	{
		icon: Users,
		emoji: "🤝",
		title: "Mentoring Programs",
		desc: "Connecting students with positive role models who guide, inspire, and listen.",
		tint: "from-blue-50 to-blue-100",
		accent: "bg-brand-blue"
	},
	{
		icon: GraduationCap,
		emoji: "🎓",
		title: "College Tours",
		desc: "Helping students explore higher education and visualize their future on campus.",
		tint: "from-green-50 to-green-100",
		accent: "bg-brand-green"
	},
	{
		icon: BookOpen,
		emoji: "📚",
		title: "Educational Support",
		desc: "Tutoring, workshops, and resources that encourage academic success at every grade.",
		tint: "from-pink-50 to-blue-100",
		accent: "bg-brand-pink"
	},
	{
		icon: Sparkles,
		emoji: "🌟",
		title: "Youth Development",
		desc: "Activities designed to build confidence, leadership, and lifelong life skills.",
		tint: "from-green-50 to-pink-100",
		accent: "bg-brand-green"
	}
];
var impactStats = [
	{
		value: "2,400+",
		label: "Students Served"
	},
	{
		value: "1,800",
		label: "Backpacks Distributed"
	},
	{
		value: "320",
		label: "Mentors Engaged"
	},
	{
		value: "45",
		label: "College Tours Organized"
	},
	{
		value: "60+",
		label: "Community Partnerships"
	}
];
var stories = [
	{
		img: story_1_default,
		name: "Jordan, 5th Grade",
		quote: "My mentor helped me believe I could be anything. Now I want to be a teacher and help kids like me."
	},
	{
		img: story_2_default,
		name: "Ms. Rivera, Mentor",
		quote: "Watching these students grow into confident leaders has been the most rewarding thing I've ever done."
	},
	{
		img: story_3_default,
		name: "Tasha, Parent",
		quote: "Caring and Nurturing didn't just give my son supplies — they gave our whole family hope."
	}
];
var events = [
	{
		img: event_supplies_default,
		date: "Aug 17",
		title: "Back-to-School Supply Drive",
		desc: "Pack and distribute 500 backpacks for K-12 students across the community.",
		tag: "Supply Drive"
	},
	{
		img: event_college_default,
		date: "Sep 28",
		title: "Fall College Tour",
		desc: "Juniors and seniors visit three regional universities for a guided campus experience.",
		tag: "College Tour"
	},
	{
		img: event_mentor_default,
		date: "Oct 12",
		title: "Mentor Meet & Greet",
		desc: "Connect with our team and explore becoming a mentor for the school year.",
		tag: "Mentoring"
	}
];
function Index() {
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	const onNewsletter = (e) => {
		e.preventDefault();
		toast.success("Thanks for subscribing! We'll be in touch soon.");
		e.target.reset();
	};
	const onContact = (e) => {
		e.preventDefault();
		toast.success("Message received. Our team will reach out shortly.");
		e.target.reset();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-lg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl items-center justify-between px-5 py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#top",
							className: "flex items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-10 w-10 place-items-center rounded-2xl text-lg text-white shadow-md bg-gradient-brand",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
									className: "h-5 w-5",
									fill: "currentColor"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex flex-col leading-tight",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-base font-semibold tracking-tight",
									children: "Caring & Nurturing"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] text-muted-foreground",
									children: "Together… Yes We Can"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden items-center gap-8 lg:flex",
							children: navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: l.href,
								className: "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
								children: l.label
							}, l.href))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hidden lg:block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								className: "rounded-full bg-brand-pink px-6 text-white hover:opacity-90",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#donate",
									children: "Donate"
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "lg:hidden",
							onClick: () => setMobileOpen((v) => !v),
							"aria-label": "Menu",
							children: mobileOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-6 w-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-6 w-6" })
						})
					]
				}), mobileOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-border/60 bg-background lg:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto flex max-w-7xl flex-col gap-1 px-5 py-3",
						children: [navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: l.href,
							onClick: () => setMobileOpen(false),
							className: "rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground",
							children: l.label
						}, l.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "mt-2 rounded-full bg-brand-pink text-white",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#donate",
								onClick: () => setMobileOpen(false),
								children: "Donate"
							})
						})]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "top",
				className: "relative isolate overflow-hidden bg-[#fdfcfd]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -left-24 -top-24 -z-10 h-96 w-96 rounded-full bg-brand-pink/10 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute right-[-6rem] top-1/2 -z-10 h-96 w-96 rounded-full bg-brand-blue/10 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -bottom-24 left-1/2 -z-10 h-96 w-96 rounded-full bg-brand-green/10 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto w-full max-w-7xl px-5 pt-16 pb-12 md:pt-24 lg:pt-28",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "lg:col-span-7",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mb-8 flex items-center gap-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-2 rounded-full border border-brand-ink/10 bg-white px-3 py-1 shadow-sm",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "relative flex h-2 w-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-green opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-brand-green" })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground",
												children: "501(c)(3) • K4–12 Youth Education"
											})]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
										className: "mb-8 font-display text-5xl leading-[0.95] tracking-tight text-brand-ink sm:text-6xl lg:text-[6.5rem]",
										children: [
											"Empowering ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "relative inline-block pr-4 pb-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "inline-block italic font-black bg-gradient-to-r from-brand-pink via-brand-blue to-brand-green bg-clip-text text-transparent px-2",
													children: "youth"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
													className: "pointer-events-none absolute -bottom-0 left-0 h-3 w-[calc(100%-0.5rem)] text-brand-pink/40",
													viewBox: "0 0 100 10",
													preserveAspectRatio: "none",
													"aria-hidden": true,
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
														d: "M0 5 Q 25 0, 50 5 T 100 5",
														fill: "none",
														stroke: "currentColor",
														strokeWidth: "4",
														strokeLinecap: "round"
													})
												})]
											}),
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"through education."
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground",
										children: [
											"Helping students from",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "font-semibold text-brand-ink",
												children: "K4 through 12th grade"
											}),
											" ",
											"succeed through mentorship, school supplies, college tours, and life-changing opportunities."
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-12 flex flex-wrap items-center gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											asChild: true,
											size: "lg",
											className: "group h-14 rounded-2xl bg-brand-pink px-8 text-base font-bold text-white shadow-xl shadow-brand-pink/20 transition hover:scale-[1.03] hover:bg-brand-pink",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: "#involved",
												children: ["Get Involved", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" })]
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											asChild: true,
											size: "lg",
											variant: "outline",
											className: "h-14 rounded-2xl border-2 border-brand-ink/10 bg-white px-8 text-base font-bold text-brand-ink hover:bg-muted",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: "#donate",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
													className: "mr-2 h-4 w-4 text-brand-pink",
													fill: "currentColor"
												}), "Support Our Mission"]
											})
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-4 flex w-fit items-center gap-4 border-t-2 border-brand-pink/30 py-6",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-display text-2xl italic leading-snug text-brand-ink sm:text-3xl lg:text-4xl",
											children: [
												"\"Together...",
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "inline-block bg-gradient-to-r from-brand-pink via-brand-blue to-brand-green bg-clip-text font-black not-italic text-transparent",
													children: "Yes We Can"
												}),
												"\""
											]
										})
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative lg:col-span-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "group relative overflow-hidden rounded-[2rem] border-8 border-white shadow-2xl",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: hero_students_default,
											alt: "Smiling K-12 students with mentors and community volunteers",
											width: 1536,
											height: 1024,
											className: "h-[600px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute bottom-4 left-4 rounded-full bg-black/40 px-4 py-2 backdrop-blur-sm",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "flex items-center text-xs font-medium text-white",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-brand-green" }), "Live in 12 schools this year"]
											})
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute -left-6 top-6 z-10 hidden items-center gap-4 rounded-2xl border border-white/60 bg-white/95 p-4 shadow-xl backdrop-blur-md sm:flex",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-blue/10 text-brand-blue",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "h-6 w-6" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display text-2xl font-black leading-tight text-brand-ink",
											children: "98%"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground",
											children: "Graduation Rate"
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute -right-6 bottom-8 z-10 hidden rounded-2xl border border-border bg-white p-5 shadow-xl sm:block",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex -space-x-3",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-8 w-8 rounded-full border-2 border-white bg-brand-pink" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-8 w-8 rounded-full border-2 border-white bg-brand-blue" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-8 w-8 rounded-full border-2 border-white bg-brand-green" })
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-display text-xl font-black text-brand-ink",
												children: "320+"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground",
												children: "Active Mentors"
											})] })]
										})
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-20 grid grid-cols-2 gap-8 border-t border-brand-ink/10 py-10 md:grid-cols-4",
							children: [
								{
									v: "2,400+",
									l: "Students Served",
									h: "group-hover:text-brand-pink"
								},
								{
									v: "1,800",
									l: "Backpacks Delivered",
									h: "group-hover:text-brand-blue"
								},
								{
									v: "45",
									l: "College Tours",
									h: "group-hover:text-brand-green"
								},
								{
									v: "60+",
									l: "Partner Orgs",
									h: "group-hover:text-brand-pink"
								}
							].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group text-center md:text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: `mb-1 font-display text-3xl font-black text-brand-ink transition-colors ${s.h}`,
									children: s.v
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-bold uppercase tracking-widest text-muted-foreground",
									children: s.l
								})]
							}, s.l))
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "mission",
				className: "mx-auto max-w-7xl px-5 py-20 lg:py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid items-center gap-12 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue",
							children: "Our Mission"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-4xl font-semibold leading-tight sm:text-5xl",
							children: "Building Brighter Futures"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-lg leading-relaxed text-muted-foreground",
							children: "Caring and Nurturing believes every child deserves the tools, guidance, and opportunities needed to succeed. Through education-focused programs and community support, we help young people reach their full potential."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 grid gap-4 sm:grid-cols-3",
							children: [
								{
									c: "bg-brand-pink",
									t: "Care",
									d: "Wrap-around support for every student."
								},
								{
									c: "bg-brand-blue",
									t: "Educate",
									d: "Resources that fuel achievement."
								},
								{
									c: "bg-brand-green",
									t: "Empower",
									d: "Confidence to lead and dream big."
								}
							].map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border bg-card p-5 shadow-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `inline-block h-2 w-10 rounded-full ${v.c}` }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-3 font-display text-xl font-semibold",
										children: v.t
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-muted-foreground",
										children: v.d
									})
								]
							}, v.t))
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 translate-x-6 translate-y-6 rounded-[2rem] bg-gradient-sunrise" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: story_1_default,
							alt: "Student smiling with a book",
							width: 768,
							height: 768,
							loading: "lazy",
							className: "relative w-full rounded-[2rem] object-cover shadow-xl"
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "programs",
				className: "relative isolate overflow-hidden py-20 lg:py-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-muted/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-2xl text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold uppercase tracking-[0.2em] text-brand-pink",
								children: "Our Programs"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-display text-4xl font-semibold sm:text-5xl",
								children: "Programs that change lives"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-lg text-muted-foreground",
								children: "From school supplies to college campuses, every program is designed to lift students up."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
						children: programs.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "group relative overflow-hidden rounded-3xl border-border/60 p-7 transition-all hover:-translate-y-1 hover:shadow-xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-20 blur-2xl ${p.accent}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-4xl",
										children: p.emoji
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-4 font-display text-2xl font-semibold",
										children: p.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-muted-foreground",
										children: p.desc
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#involved",
										className: "mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-ink transition-transform group-hover:translate-x-1",
										children: ["Learn more ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
									})
								]
							})]
						}, p.title))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "impact",
				className: "relative isolate overflow-hidden py-20 lg:py-28 text-white",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-gradient-hero" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-brand-ink/30" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-7xl px-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-2xl text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-semibold uppercase tracking-[0.2em] text-white/80",
									children: "Our Impact"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 font-display text-4xl font-semibold sm:text-5xl",
									children: "Making a Difference Together"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-lg text-white/85",
									children: "Real numbers from a community that shows up — year after year, family after family."
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5",
							children: impactStats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-md",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-5xl font-semibold",
									children: s.value
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 text-sm font-medium uppercase tracking-wider text-white/85",
									children: s.label
								})]
							}, s.label))
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-7xl px-5 py-20 lg:py-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-2xl text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-semibold uppercase tracking-[0.2em] text-brand-green",
						children: "Success Stories"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl font-semibold sm:text-5xl",
						children: "Stories of Hope & Achievement"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-8 md:grid-cols-3",
					children: stories.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-transform hover:-translate-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: s.img,
							alt: s.name,
							width: 768,
							height: 768,
							loading: "lazy",
							className: "h-64 w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-7",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-display text-xl leading-snug text-brand-ink",
								children: [
									"\"",
									s.quote,
									"\""
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex items-center gap-2 text-sm font-semibold text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-6 rounded-full bg-brand-pink" }), s.name]
							})]
						})]
					}, s.name))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "involved",
				className: "relative isolate overflow-hidden py-20 lg:py-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-gradient-warm" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-2xl text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue",
								children: "Get Involved"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-display text-4xl font-semibold sm:text-5xl",
								children: "Join Our Mission"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-lg text-muted-foreground",
								children: "Three meaningful ways to plug into the work."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-14 grid gap-6 md:grid-cols-3",
						children: [
							{
								icon: HandHeart,
								title: "Volunteer",
								desc: "Support youth through mentoring, tutoring, and community events.",
								color: "var(--brand-pink)",
								cta: "Become a Volunteer"
							},
							{
								icon: Heart,
								title: "Donate",
								desc: "Help provide backpacks, books, and life-changing opportunities.",
								color: "var(--brand-blue)",
								cta: "Give Today"
							},
							{
								icon: Building2,
								title: "Partner With Us",
								desc: "Collaborate as a school, business, or community organization.",
								color: "var(--brand-green)",
								cta: "Start a Partnership"
							}
						].map((c) => {
							const Icon = c.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
								className: "rounded-3xl border-border/60 bg-white/90 p-8 backdrop-blur transition-all hover:-translate-y-1 hover:shadow-xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-14 w-14 place-items-center rounded-2xl text-white shadow-md",
										style: { backgroundColor: c.color },
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-7 w-7" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-5 font-display text-2xl font-semibold",
										children: c.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-muted-foreground",
										children: c.desc
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										variant: "ghost",
										className: "mt-5 -ml-3 text-brand-ink hover:bg-brand-ink/5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: "#contact",
											children: [
												c.cta,
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 h-4 w-4" })
											]
										})
									})
								]
							}, c.title);
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "events",
				className: "mx-auto max-w-7xl px-5 py-20 lg:py-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-semibold uppercase tracking-[0.2em] text-brand-pink",
						children: "Upcoming Events"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl font-semibold sm:text-5xl",
						children: "Community Events & Activities"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						className: "rounded-full border-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#contact",
							children: ["View full calendar ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "ml-2 h-4 w-4" })]
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-7 md:grid-cols-3",
					children: events.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative h-56 overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: e.img,
									alt: e.title,
									width: 1024,
									height: 768,
									loading: "lazy",
									className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-brand-ink",
									children: e.tag
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute right-4 top-4 rounded-full bg-brand-ink/85 px-3 py-1 text-xs font-semibold text-white backdrop-blur",
									children: e.date
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl font-semibold",
								children: e.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: e.desc
							})]
						})]
					}, e.title))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "donate",
				className: "relative isolate overflow-hidden py-20 lg:py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-6xl px-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative overflow-hidden rounded-[2.5rem] p-10 sm:p-16 text-white shadow-2xl bg-gradient-brand",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/15 blur-3xl" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-brand-green/40 blur-3xl" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-semibold uppercase tracking-[0.2em] text-white/85",
										children: "Donate"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-3 font-display text-4xl font-semibold sm:text-5xl",
										children: "Invest in a Child's Future"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 max-w-xl text-lg text-white/90",
										children: "Your support helps provide educational resources, mentorship opportunities, and life-changing experiences for students from K4 through 12th grade."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-8 flex flex-wrap gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											asChild: true,
											size: "lg",
											className: "h-12 rounded-full bg-white px-7 text-brand-ink hover:bg-white/90",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: "#contact",
												children: "Donate Today"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											asChild: true,
											size: "lg",
											variant: "outline",
											className: "h-12 rounded-full border-2 border-white/70 bg-transparent px-7 text-white hover:bg-white/10",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: "#contact",
												children: "Become a Sponsor"
											})
										})]
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-3 gap-3",
									children: [
										"$25",
										"$50",
										"$100",
										"$250",
										"$500",
										"Custom"
									].map((amt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#contact",
										className: "rounded-2xl bg-white/15 px-4 py-5 text-center font-display text-xl font-semibold backdrop-blur transition hover:bg-white/25",
										children: amt
									}, amt))
								})]
							})
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "contact",
				className: "mx-auto max-w-7xl px-5 py-20 lg:py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-10 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-3xl border border-border bg-card p-8 shadow-sm sm:p-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold uppercase tracking-[0.2em] text-brand-green",
								children: "Stay Connected"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-3xl font-semibold sm:text-4xl",
								children: "Newsletter Signup"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-muted-foreground",
								children: "Receive updates on programs, events, volunteer opportunities, and community impact."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: onNewsletter,
								className: "mt-6 grid gap-3 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										required: true,
										placeholder: "Your name",
										className: "h-12 rounded-xl"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										required: true,
										type: "email",
										placeholder: "Email address",
										className: "h-12 rounded-xl"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "submit",
										className: "h-12 rounded-xl text-white sm:col-span-2 bg-gradient-fresh",
										children: "Subscribe"
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-3xl border border-border bg-card p-8 shadow-sm sm:p-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold uppercase tracking-[0.2em] text-brand-pink",
								children: "Contact"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-3xl font-semibold sm:text-4xl",
								children: "Get in Touch"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-muted-foreground",
								children: "Volunteer inquiries, partnership opportunities, and donation questions — we'd love to hear from you."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: onContact,
								className: "mt-6 grid gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-3 sm:grid-cols-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											required: true,
											placeholder: "Name",
											className: "h-12 rounded-xl"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											required: true,
											type: "email",
											placeholder: "Email",
											className: "h-12 rounded-xl"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										type: "tel",
										placeholder: "Phone",
										className: "h-12 rounded-xl"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										required: true,
										placeholder: "How can we help?",
										className: "min-h-32 rounded-xl"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "submit",
										className: "h-12 rounded-xl bg-brand-ink text-white hover:bg-brand-ink/90",
										children: "Send Message"
									})
								]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative isolate overflow-hidden py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-gradient-warm" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-4xl px-5 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-5xl font-semibold leading-tight sm:text-6xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-brand",
								children: "Together… Yes We Can"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-5 max-w-2xl text-lg text-muted-foreground",
							children: "Join us in creating opportunities, inspiring success, and empowering the next generation."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap justify-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								className: "h-12 rounded-full bg-brand-pink px-8 text-white hover:opacity-90",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#involved",
									children: "Volunteer"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								className: "h-12 rounded-full bg-brand-ink px-8 text-white hover:opacity-90",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#donate",
									children: "Donate"
								})
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "bg-brand-ink text-white",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.3fr_1fr_1fr_1fr]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-10 w-10 place-items-center rounded-2xl text-white bg-gradient-brand",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
										className: "h-5 w-5",
										fill: "currentColor"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-lg font-semibold",
									children: "Caring & Nurturing"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-sm text-sm text-white/70",
								children: "A 501(c)(3) nonprofit empowering K4–12 students and their families through education, mentorship, and community."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 flex gap-3",
								children: [
									Facebook,
									Instagram,
									Linkedin,
									Youtube
								].map((Icon, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									"aria-label": "Social",
									className: "grid h-10 w-10 place-items-center rounded-full border border-white/15 transition hover:bg-white/10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
								}, i))
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-semibold uppercase tracking-wider text-white/60",
							children: "Explore"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-2.5 text-sm",
							children: [
								"About Us",
								"Programs",
								"Events",
								"Volunteer",
								"Donate",
								"Contact"
							].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "text-white/85 hover:text-white",
								children: l
							}) }, l))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-semibold uppercase tracking-wider text-white/60",
							children: "Programs"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-2.5 text-sm",
							children: [
								"School Supply Drives",
								"Mentoring",
								"College Tours",
								"Educational Support",
								"Youth Development"
							].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#programs",
								className: "text-white/85 hover:text-white",
								children: l
							}) }, l))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-semibold uppercase tracking-wider text-white/60",
							children: "Contact"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-4 space-y-3 text-sm text-white/85",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-brand-pink" }), " hello@caringandnurturing.org"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-brand-green" }), " (555) 123-4567"]
							})]
						})] })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-white/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-white/60 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" Caring and Nurturing. All rights reserved."
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "501(c)(3) Nonprofit Organization · \"Together… Yes We Can\"" })]
					})
				})]
			})
		]
	});
}
//#endregion
export { Index as component };
