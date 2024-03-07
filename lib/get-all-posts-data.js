//import dynamic from 'next/dynamic';
//import {metadata, _importMeta as postPaths} from '../posts/*'

const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

// current 'posts' directory
const postsDirectory = path.join(process.cwd(), "posts");
const mdx_file_extention = ".mdx";

function getAllFilesInDirectory() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return path.parse(fileName);
  });
}

function getMdxFiles() {
  const allFiles = getAllFilesInDirectory();
  return allFiles.filter((parsedFile) => parsedFile.ext == mdx_file_extention);
}

export function getAllPostsPath() {
  const allMdxFiles = getMdxFiles();
  return allMdxFiles.map((parsedFile) => {
    return {
      params: {
        id: parsedFile.name,
      },
    };
  });

  /*
	return metadata.map((post_metadata, index) => {
		let path = postPaths[index]?.importedPath;
		let path_list = path.split('/');
		path = path_list[path_list.length - 1].replace(/\.mdx$/, '');
		return {
			params: {
				id: path,
			}
		}
	})
*/
}

export function getAllPostsMetadata() {
  const allMdxFiles = getMdxFiles();

  const allPostsData = allMdxFiles.map((parsedFile) => {
    const fullPath = path.join(postsDirectory, parsedFile.base);

    // get MDX metadata and content
    const fileContents = fs.readFileSync(fullPath, "utf8");
    // get metadata, content
    const { data, content } = matter(fileContents);
    let metadata = data;
    metadata["id"] = parsedFile.name;
    return { metadata, content };
  });

  return allPostsData.sort((a, b) => {
    if (new Date(a.metadata.date) < new Date(b.metadata.date)) {
      return 1;
    } else {
      return -1;
    }
  });

  /*
	const postsMetadata = metadata.map((metadata, index) => {
		let path = postPaths[index]?.importedPath;
		let path_list = path.split('/');
		path = path_list[path_list.length - 1].replace(/\.mdx$/, '');
		//console.log(path);
		metadata['id'] = path;
		return { metadata } 
	});

	return postsMetadata.sort((a, b) => {
		if (new Date(a.metadata.date) < new Date(b.metadata.date)) {
			return 1;
		}
		else {
			return -1;
		}
	})
*/
}

export function getPostMetadata(id) {
  const postMetadata = metadata.filter((metadata, index) => {
    let path = postPaths[index]?.importedPath;
    let path_list = path.split("/");
    path = path_list[path_list.length - 1].replace(/\.mdx$/, "");
    //console.log(path, id);
    if (path == id) return { metadata };
  });
  return postMetadata;
}

export function getPostData(id) {
  const fullPath = path.join(postsDirectory, id + mdx_file_extention);
  // get MDX metadata and content
  const fileContents = fs.readFileSync(fullPath, "utf8");
  // get metadata, content
  const { data, content } = matter(fileContents);

  let metadata = data;
  metadata["id"] = id;

  return { metadata: metadata, content: content };

  /*
	const full_path = path.join(postsDirectory, `${id}.mdx`);
	const MDXContent = dynamic(() => import(full_path));
	const mdx = <MDXContent />
	return {
		id,
		mdx,
	}
*/
}
