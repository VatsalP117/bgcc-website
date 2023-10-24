import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  Image,
  NavbarMenuItem,
} from "@nextui-org/react";

export default function Nav() {
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar isBordered className=" bg-[#1C1C1C] text-white">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="start">
        <NavbarBrand>
          <Image
            width={200}
            alt="BGCC Logo Image"
            src="https://i.imgur.com/I4dsioZ.png"
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarBrand>
          <Image
            width={150}
            alt="BGCC Logo Image"
            src="https://i.imgur.com/I4dsioZ.png"
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="flex flex-row  mr-0" justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button className="color-bgcc-yellow text-black">
            Partner with Us
          </Button>
        </NavbarItem>

        <NavbarItem>
          <Link className="text-white mx-3 hidden lg:flex" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white mx-3 hidden lg:flex" href="#">
            Testimonials
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white mx-3 hidden lg:flex" href="#">
            Events
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white mx-3 hidden lg:flex" href="/services">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white mx-3 hidden lg:flex" href="/clients">
            Clients
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
