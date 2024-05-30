
import { getAbout } from "@/sanity/sanity.query";
import type { AboutType } from "@/types";
import { BiEnvelope, BiSolidBomb } from "react-icons/bi";


export default async function Footer() {
  const profile: AboutType[] = await getAbout();

  return (
    <footer className="border-t border-zinc-800 mt-44">
      <div className="max-w-7xl mx-auto flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-y-4 md:px-16 px-6 py-16 text-zinc-400">
        <div>

          <a href="https://www.google.com/maps/place/2024+E+Westmoreland+St,+Philadelphia,+PA+19134/@39.994731,-75.108857,16z/data=!4m6!3m5!1s0x89c6b7d527488d1f:0xe444d88bbbc07fe9!8m2!3d39.9947309!4d-75.1088568!16s%2Fg%2F11c113zn0c?hl=en&entry=ttu"><p className="hover:text-purple-400 duration-300 mb-5">2024 East Westmoreland Street, Philadelphia, Pennsylvania 19134, United States</p></a>
          {profile && profile.map((data) => (
            <ul key={data._id}>
              <li>
                <a
                  href={`mailto:${data.email}`}
                  className="flex items-center gap-x-2 hover:text-purple-400 duration-300"
                >
                  <BiEnvelope className="text-lg" />
                  {data.email}
                </a>
              </li>

              {Object.entries(data.socialLinks)
                .sort()
                .map(([key, value], id) => (
                  <li key={id}>
                    <a
                      href={value}
                      rel="noreferer noopener"
                      className="flex items-center gap-x-2 hover:text-purple-400 duration-300"
                    >
                      <BiSolidBomb className="text-lg" />
                      {key[0].toUpperCase() + key.toLowerCase().slice(1)}
                    </a>
                  </li>
                ))}

            </ul>
          ))}
        </div>

        <small className=" duration-200 font-mono">
          All rights reserved &copy; {new Date().getFullYear()}
        </small>


      </div>
    </footer>
  );
}
