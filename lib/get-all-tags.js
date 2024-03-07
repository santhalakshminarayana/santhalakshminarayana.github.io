//import dynamic from 'next/dynamic';
//import {metadata, _importMeta as postPaths} from '../posts/*.mdx';

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

function getallPostsMetadata() {
  const allMdxFiles = getMdxFiles();

  const allPostsMetadata = allMdxFiles.map((parsedFile) => {
    const fullPath = path.join(postsDirectory, parsedFile.base);

    // get MDX metadata and content
    const fileContents = fs.readFileSync(fullPath, "utf8");
    // get metadata, content
    const { data, content } = matter(fileContents);
    let metadata = data;
    metadata["id"] = parsedFile.name;
    return metadata;
  });
  return allPostsMetadata;
}

export function getAllTagsPath() {
  const allPostsMetadata = getallPostsMetadata();

  const allTags = new Set();

  allPostsMetadata.map((post_metadata, index) => {
    post_metadata.tags.map((tag_name, index) => {
      allTags.add(tag_name);
    });
  });

  return [...allTags].map((tag_name, index) => {
    return {
      params: {
        id: tag_name,
      },
    };
  });
}

export function getTagPostsMetadata(tag_name) {
  const allPostsMetadata = getallPostsMetadata();

  let postsMetadata = allPostsMetadata.filter((metadata, index) => {
    //metadata['display_img'] = '../' + metadata['display_img'];
    if (metadata.tags.indexOf(tag_name) != -1) return { metadata };
  });

  postsMetadata = postsMetadata.map((metadata, index) => {
    return { metadata };
  });

  return postsMetadata.sort((a, b) => {
    if (new Date(a.metadata.date) < new Date(b.metadata.date)) {
      return 1;
    } else {
      return -1;
    }
  });
}

/*
export function getAllTagsPath() {
  const allTags = new Set();

  metadata.map((post_metadata, index) => {
    post_metadata.tags.map((tag_name, index) => {
      allTags.add(tag_name);
    })
  })

  console.log(allTags);

  return [...allTags].map((tag_name, index) => {
    return {
      params: {
        id: tag_name
      }
    }
  })
}

export function getTagPostsMetadata(tag_name) {
  let postsMetadata = metadata.filter((metadata, index) => {
    metadata['display_img'] = '../' + metadata['display_img'];
    let path = postPaths[index]?.importedPath;
    let path_list = path.split('/');
    path = path_list[path_list.length - 1].replace(/\.mdx$/, '');
    console.log(path)
    metadata['id'] = path;
    if (metadata.tags.indexOf(tag_name) != -1)
      return { metadata };
  });

  postsMetadata = postsMetadata.map((metadata, index) => {
    return { metadata};
  })

  return postsMetadata.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1;
    }
    else {
      return -1;
    }
  })
}
*/
