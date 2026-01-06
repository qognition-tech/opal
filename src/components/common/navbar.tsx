"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { Icons } from "@/assets/icons";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { Button } from "../ui/button";
import { AnnouncementBar } from "./announcement-bar";
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuContent,
    NavigationMenuTrigger,
    NavigationMenuLink,
} from "../ui/navigation-menu";
import { useEducationRoutes } from "@/hooks/wp/use-education-routes";
import { useMigrationRoutes } from "@/hooks/wp/use-migration-routes";
import { Skeleton } from "../ui/skeleton";
import { ActionButtonNav } from "../ui/action-button-nav";

// Animation variants
const menuButtonVariants = {
    visible: { opacity: 1, rotate: 0, scale: 1 },
    hidden: { opacity: 0, rotate: 90, scale: 0.8 },
};

const mobileMenuVariants = {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 8 },
};

type NavLink = {
    label: string;
    submenu?: {
        label: string;
        href: string;
    }[];
    href?: string;
    basePath?: string;
};

const NAVLINKS: NavLink[] = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Education",
        submenu: [],
        basePath: "/education",
    },
    {
        label: "Migration",
        submenu: [],
        basePath: "/migration",
    },
    {
        label: "Blogs",
        href: "/blogs",
    },
    {
        label: "Testimonials",
        href: "/testimonials",
    },
    {
        label: "About",
        href: "/about",
    },
    {
        label: "Contact",
        href: "/contact",
    },
];

const ACTION_BUTTON = {
    text: "Book Now",
    href: "https://cal.com/opalconsulting?theme=light",
};

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isAnnouncementBarVisible, setIsAnnouncementBarVisible] = useState(true);
    const isMobileMenuOpenRef = useRef(isMobileMenuOpen);
    isMobileMenuOpenRef.current = isMobileMenuOpen;

    const pathname = usePathname();

    const { data: educationRoutes, isLoading: isEducationRoutesLoading } = useEducationRoutes();
    const { data: migrationRoutes, isLoading: isMigrationRoutesLoading } = useMigrationRoutes();

    const navlinks = useMemo(
        () =>
            NAVLINKS.map((item) => {
                if (item.label === "Education") {
                    return {
                        ...item,
                        submenu: educationRoutes?.map((route) => ({
                            label: route.title.rendered,
                            href: `/education/${route.slug}`,
                        })),
                    };
                }
                if (item.label === "Migration") {
                    return {
                        ...item,
                        submenu: migrationRoutes?.map((route) => ({
                            label: route.title.rendered,
                            href: `/migration/${route.slug}`,
                        })),
                    };
                }
                return item;
            }),
        [educationRoutes, migrationRoutes],
    );

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (isMobileMenuOpenRef.current) {
                return;
            }
            const scrollY = window.pageYOffset;

            setIsAnnouncementBarVisible(scrollY <= 10);
            setIsScrolled(scrollY > 20);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed top-0 right-0 left-0 z-50 w-full">
            <AnimatePresence>
                {isAnnouncementBarVisible && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="overflow-hidden"
                    >
                        <AnnouncementBar />
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="flex w-full items-center justify-center bg-transparent p-4">
                <motion.nav
                    className={cn(
                        "relative mx-auto flex w-full max-w-[1500px] items-center justify-between px-4 transition-all duration-300",
                        isScrolled ? "max-w-7xl rounded-full bg-neutral-50/80 drop-shadow-lg backdrop-blur-lg" : "",
                    )}
                    initial={false}
                    animate={{
                        padding: isScrolled ? "0.45rem 0.75rem 0.5rem 1.25rem" : "0.75rem 1rem",
                        borderWidth: isScrolled ? "1px" : "0px",
                        borderColor: isScrolled ? "var(--color-neutral-100)" : "rgba(255, 255, 255, 0)",
                    }}
                    transition={{
                        duration: 0.4,
                        ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                >
                    {/* Logo */}
                    <Link
                        href="/"
                        className="focus:outline-none focus-visible:border-neutral-400 focus-visible:ring-2 focus-visible:ring-neutral-400/50 focus-visible:ring-offset-2"
                    >
                        <Icons.LogoFull className="h-10 max-[28rem]:h-6" />

                        <span className="sr-only">Opal Consulting - Home</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <NavigationMenu className="flex flex-1 max-xl:hidden" viewport={false}>
                        <NavigationMenuList>
                            {navlinks.map((item) =>
                                item.submenu ? (
                                    <NavLink
                                        key={item.label}
                                        item={item}
                                        pathname={pathname}
                                        isLoading={
                                            item.label === "Education"
                                                ? isEducationRoutesLoading
                                                : item.label === "Migration"
                                                  ? isMigrationRoutesLoading
                                                  : false
                                        }
                                    />
                                ) : (
                                    <NavigationMenuItem key={item.label}>
                                        <NavLink item={item} pathname={pathname} />
                                    </NavigationMenuItem>
                                ),
                            )}
                        </NavigationMenuList>
                    </NavigationMenu>

                    {/* Book a Consultation Button */}
                    <ActionButtonNav
                        text={ACTION_BUTTON.text}
                        href={ACTION_BUTTON.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm xl:px-6 xl:py-3 xl:text-base"
                    />

                    {/* Mobile Menu Toggle */}
                    <MenuToggleButton isOpen={isMobileMenuOpen} onToggle={toggleMobileMenu} />

                    {/* Mobile Menu */}
                    <MobileMenu
                        isOpen={isMobileMenuOpen}
                        onClose={closeMobileMenu}
                        actionButton={ACTION_BUTTON}
                        navItems={navlinks}
                        isScrolled={isScrolled}
                        pathname={pathname}
                        isEducationRoutesLoading={isEducationRoutesLoading}
                        isMigrationRoutesLoading={isMigrationRoutesLoading}
                    />
                </motion.nav>
            </div>
        </header>
    );
}

// Sub-components
interface NavLinkProps {
    item: NavLink;
    onClick?: () => void;
    className?: string;
    isLoading?: boolean;
    pathname: string;
}

function NavLink({ item, className, onClick, isLoading, pathname }: NavLinkProps) {
    // For items with submenus, render NavigationMenuItem with dropdown
    if (item.submenu) {
        const isActive = item.basePath ? pathname.startsWith(item.basePath) : false;

        return (
            <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(className, isActive && "bg-neutral-100/80")}>
                    {item.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                    {isLoading ? (
                        <DesktopNavSkeleton />
                    ) : (
                        item.submenu.map((subItem) => (
                            <NavigationMenuLink
                                key={subItem.href}
                                asChild
                                className={cn("w-72", pathname === subItem.href && "bg-neutral-100")}
                            >
                                <Link href={subItem.href} onClick={onClick}>
                                    {subItem.label}
                                </Link>
                            </NavigationMenuLink>
                        ))
                    )}
                </NavigationMenuContent>
            </NavigationMenuItem>
        );
    }

    const isActive = item.href ? pathname === item.href : false;

    // For regular items without submenus, render as simple Link
    return (
        <Link
            href={item.href ?? "/"}
            className={cn(
                "group inline-flex h-9 w-max items-center justify-center rounded-full bg-transparent px-3 py-2 text-base transition-colors",
                "focus-visible:text-primary-700 text-neutral-950 hover:bg-neutral-100 focus:outline-none active:bg-neutral-100",
                "disabled:pointer-events-none disabled:opacity-50",
                className,
                isActive && "bg-neutral-100",
            )}
            onClick={onClick}
        >
            {item.label}
        </Link>
    );
}

interface MenuToggleButtonProps {
    isOpen: boolean;
    onToggle: () => void;
}

function MenuToggleButton({ isOpen, onToggle }: MenuToggleButtonProps) {
    return (
        <Button
            variant="outline"
            size="lg"
            className="hidden rounded-full px-4 max-xl:flex"
            onClick={onToggle}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
        >
            {/* <span className="text-base leading-[1.1em] tracking-[-0.5px]">Menu</span> */}
            <div className="relative size-6">
                <motion.div
                    initial={false}
                    animate={isOpen ? "hidden" : "visible"}
                    variants={menuButtonVariants}
                    transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="absolute inset-0"
                >
                    <Bars3Icon className="size-6" />
                </motion.div>
                <motion.div
                    initial={false}
                    animate={isOpen ? "visible" : "hidden"}
                    variants={menuButtonVariants}
                    transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="absolute inset-0"
                >
                    <XMarkIcon className="size-6" />
                </motion.div>
            </div>
        </Button>
    );
}

// Mobile navigation item

interface MobileNavItemProps {
    item: NavLink;
    onClose: () => void;
    isLoading?: boolean;
    pathname: string;
}

function MobileNavItem({ item, onClose, isLoading, pathname }: MobileNavItemProps) {
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

    if (item.submenu) {
        const isActive = item.basePath ? pathname.startsWith(item.basePath) : false;

        return (
            <div>
                <button
                    onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
                    className={cn(
                        "flex w-full items-center justify-between py-3 text-left text-lg font-medium text-neutral-700 transition-colors hover:text-neutral-950",
                        isActive && "text-neutral-950",
                    )}
                >
                    <span>{item.label}</span>
                    <ChevronDownIcon
                        className={cn("size-5 transition-transform duration-200", isSubmenuOpen && "rotate-180")}
                    />
                </button>
                <AnimatePresence>
                    {isSubmenuOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className="overflow-hidden"
                        >
                            <div className="ml-2 space-y-2 border-l-2 border-neutral-200 pb-3 pl-4">
                                {isLoading ? (
                                    <MobileNavSkeleton />
                                ) : (
                                    item.submenu.map((subItem) => (
                                        <Link
                                            key={subItem.href}
                                            href={subItem.href}
                                            onClick={onClose}
                                            className={cn(
                                                "block py-2 pl-3 text-base transition-colors hover:text-neutral-950",
                                                pathname === subItem.href
                                                    ? "font-semibold text-neutral-950"
                                                    : "text-neutral-600",
                                            )}
                                        >
                                            {subItem.label}
                                        </Link>
                                    ))
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        );
    }

    const isActive = item.href ? pathname === item.href : false;

    return (
        <div>
            <Link
                href={item.href ?? "/"}
                onClick={onClose}
                className={cn(
                    "block py-3 text-lg font-medium transition-colors hover:text-neutral-950",
                    isActive ? "font-semibold text-neutral-950" : "text-neutral-700",
                )}
            >
                {item.label}
            </Link>
        </div>
    );
}

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    navItems: NavLink[];
    isScrolled: boolean;
    actionButton: {
        text: string;
        href: string;
    };
    pathname: string;
    isEducationRoutesLoading: boolean;
    isMigrationRoutesLoading: boolean;
}

function MobileMenu({
    isOpen,
    onClose,
    actionButton,
    navItems,
    isScrolled,
    pathname,
    isEducationRoutesLoading,
    isMigrationRoutesLoading,
}: MobileMenuProps) {
    // Close menu on escape key
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape" && isOpen) {
                onClose();
            }
        };

        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    variants={mobileMenuVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className={cn(
                        "absolute top-[3.5rem] right-0 left-0 z-50 m-4 mx-0 max-h-[calc(100dvh-140px)]",
                        "bg-primary-50 hidden flex-col gap-8 rounded-xl p-6 max-xl:flex",
                        isScrolled && "border border-neutral-100 drop-shadow-lg backdrop-blur-lg",
                    )}
                    onClick={(e) => {
                        // Only close if clicking the backdrop, not the menu content
                        if (e.target === e.currentTarget) {
                            onClose();
                        }
                    }}
                    role="dialog"
                    aria-label="Mobile navigation menu"
                >
                    <nav className="no-scrollbar flex-1 overflow-y-auto" aria-label="Mobile navigation">
                        <div className="flex flex-col">
                            {navItems.map((item) => (
                                <MobileNavItem
                                    key={item.label}
                                    item={item}
                                    onClose={onClose}
                                    pathname={pathname}
                                    isLoading={
                                        item.label === "Education"
                                            ? isEducationRoutesLoading
                                            : item.label === "Migration"
                                              ? isMigrationRoutesLoading
                                              : false
                                    }
                                />
                            ))}
                        </div>
                    </nav>
                    <Button variant="primary" size="xl" className="w-fit rounded-full" asChild>
                        <Link href={actionButton.href} target="_blank" rel="noopener noreferrer">
                            <span>{actionButton.text}</span>
                            <ArrowRightIcon />
                        </Link>
                    </Button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

// Skeleton components

function DesktopNavSkeleton() {
    return (
        <div className="grid w-72 grid-cols-1 gap-3 p-4">
            <Skeleton className="h-5 w-4/5" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-2/4" />
        </div>
    );
}

function MobileNavSkeleton() {
    return (
        <div className="space-y-3 pt-2">
            <Skeleton className="h-4 w-4/5" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
        </div>
    );
}
